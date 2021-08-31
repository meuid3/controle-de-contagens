const db = require('../../db/db')

class Model {

  constructor({properties, table, schema, primaryKey, generateExternalId = false}) {
    this.properties = properties
    this.table = table
    this.schema = schema
    this.primaryKey = primaryKey
    this.generateExternalId = generateExternalId
    this.db = db
  }

  async getAll() {
    const queryString = `SELECT * FROM ${this.table}`
    const result = await db.query(queryString)
    return result.rows
  }

  async find(idTabela) {
    const queryString = `SELECT * FROM ${this.schema}.${this.table} WHERE ${this.primaryKey} = $1`
    const result = await db.query(queryString, [idTabela])
    return result.rows.shift()
  }

  async create(dados) {
    const { properties, paramsPosition, paramsValues } = this.mountDataQueryCreate(dados)
    const query = `INSERT INTO ${this.table} (${properties}) VALUES (${paramsPosition}) RETURNING *`
    const result = await db.query(query, paramsValues)
    return result.rows.shift()
  }

  async update(dados, filters) {
    const {query, paramValues} = this.mountDataQueryUpdate(dados, filters)
    const result = await db.query(query, paramValues)
    return result.rows.shift()
  }

  async delete(idTabela) {
    const queryString = `DELETE FROM ${this.schema}.${this.table} WHERE ${this.primaryKey} = $1 RETURNING *`
    const result = await db.query(queryString, [idTabela])
    return result.rows.shift()
  }

  mountDataQueryCreate(dados) {
    let properties = ''
    let paramsPosition = ''
    let currentParamPosition = 1
    let paramValues = []

    // cria os parâmetros da queryString independente da ordem informada
    for (const [index, proprertie] of this.properties.entries()) {
      
      if(!this.generateExternalId && proprertie.name == this.primaryKey) continue

      properties += `,${proprertie.name}`
      paramsPosition += `,$${currentParamPosition}`
      currentParamPosition++
    
      // Valida e ordena os valores na ordem correta de inserção
      if(!dados[proprertie.name]) {
        if(this.isAceptPropertieNull(proprertie))
          paramValues.push(dados[proprertie.name])
        else
          throw new Error(`Propertie (${proprertie.name}) is not a null!`)
      } else {
        paramValues.push(dados[proprertie.name])
      }
    }

    properties = properties.substring(1); 
    paramsPosition = paramsPosition.substring(1);

    return {
      properties: properties,
      paramsPosition: paramsPosition,
      paramsValues:paramValues,
    }
  }

  mountDataQueryUpdate(dados, filters = []) {
    let propertiesAndParams = ''
    let currentParamPosition = 1
    let paramValues = []

    const propertyNames = Object.getOwnPropertyNames(dados)

    propertyNames.forEach(value => {
      if(value !== this.primaryKey) {
          propertiesAndParams += `,${value} = $${currentParamPosition}`
          paramValues.push(dados[value])
        currentParamPosition++
      }
    })

    propertiesAndParams = propertiesAndParams.substring(1);

    let conditionalFilter = ''

    if(filters.length == 0) {
      conditionalFilter =` ${this.table}.${this.primaryKey} = $${currentParamPosition++}`
      paramValues.push(dados[this.primaryKey])
    }

    filters.forEach((value, index) => {
      if(value.name !== this.primaryKey) {
        const property = Object.getOwnPropertyNames(value)
        if(index == 0) 
          conditionalFilter += ` ${this.table}.${property} = $${currentParamPosition++}`
        else
          conditionalFilter += ` AND  ${this.table}.${property} = $${currentParamPosition++}`
        
        paramValues.push(value[property])
      }
    })

    const query = `UPDATE ${this.schema}.${this.table} SET ${propertiesAndParams} WHERE ${conditionalFilter} RETURNING *`
    
    return {
      query: query,
      paramValues: paramValues
    }
  }

  isAceptPropertieNull({isNull}) {
    return  isNull
  }
}

module.exports = Model