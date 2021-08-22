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
    try {
      const queryString = `SELECT * FROM ${this.schema}.${this.table} WHERE ${this.primaryKey} = $1`
      const result = await db.query(queryString, [idTabela])
      return result.rows
    }
    catch(error) {
      return error
    }
  }


  async create(dados) {

    try{
      const { properties, paramsPosition, paramsValues } = this.mountDataQueryCreate(dados)
      const query = `INSERT INTO ${this.table} (${properties}) VALUES (${paramsPosition}) RETURNING *`
      const result = await db.query(query, paramsValues)
      return result.rows
    }
    catch(error) {
      console.log(error)
    }
   
  }

  async update(dados, filters) {
    const {query, paramValues} = this.mountDataQueryUpdate(dados, filters)
    try {
      const result = await db.query(query, paramValues)
      return result.rows
    }
    catch(error) {
      return error
    }
  }

  async delete(idTabela) {
    try {
      const queryString = `DELETE * FROM ${this.schema}.${this.table} WHERE ${this.primaryKey} = $1 RETURNING *`
      const result = await db.query(queryString, [idTabela])
      return result.rows
    }
    catch(error) {
      return error
    }
  }

  isAceptPropertieNull({isNull}) {
    return  isNull
  }

  mountDataQueryCreate(dados) {

    let properties = ''
    let paramsPosition = ''
    let currentParamPosition = 1
    let paramValues = []

    // laço responsável por criar os parâmetros da queryString independente da
    // ordem informada
    for (const [index, proprertie] of this.properties.entries()) {
      
      if(!this.generateExternalId && proprertie.name == this.primaryKey) continue

      if(index !== 0) {
        properties += `,${proprertie.name}`
        paramsPosition += `,$${currentParamPosition}`
      } else {
        properties += `${proprertie.name}`
        paramsPosition += `$${currentParamPosition}`
      }
      currentParamPosition++
    
    // bloco responsável por validar e ordenar os valores na ordem correta de inserção
      if(!dados[proprertie.name]) {
        if(this.isAceptPropertieNull(proprertie))
          paramValues.push(dados[proprertie.name])
        else
          return {message: `Propertie (${proprertie.name}) is not a null!`}
      } else {
        paramValues.push(dados[proprertie.name])
      }

    }

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

    // laço responsável por criar os parâmetros da queryString independente da
    // ordem informada
    for (const [index, proprertie] of this.properties.entries()) {
  
      if(index !== 0) {
        propertiesAndParams += `,${proprertie.name} = $${currentParamPosition}`
      } else {
        propertiesAndParams += `${proprertie.name} = $${currentParamPosition}`
      }
      currentParamPosition++
    
    // bloco responsável por validar e ordenar os valores na ordem correta de inserção
      if(!dados[proprertie.name]) {
        if(this.isAceptPropertieNull(proprertie))
          paramValues.push(dados[proprertie.name])
        else
          return {message: `Propertie (${proprertie.name}) is not a null!`}
      } else {
        paramValues.push(dados[proprertie.name])
      }

    }

    let conditionalFilter = ''

    filters.forEach((value, index) => {
      const property = Object.getOwnPropertyNames(value)
      if(index == 0) 
        conditionalFilter += ` ${property} = $${currentParamPosition++}`
      else
        conditionalFilter += ` AND ${property} = $${currentParamPosition++}`
      
        paramValues.push(value[property])
    })

    const query = `UPDATE ${this.schema}.${this.table} SET ${propertiesAndParams} WHERE ${conditionalFilter} RETURNING *`
    
    return {
      properties: query,
      paramValues: paramValues
    }
  }


}

module.exports = Model