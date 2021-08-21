const db = require('../../db/db')

class Model {

  constructor({properties, table, schema, primaryKey}) {
    this.properties = properties
    this.table = table
    this.schema = schema
    this.primaryKey = primaryKey
    this.db = db
  }

  async getAll() {
    const queryString = `SELECT * FROM ${table}`
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

  async getAll() {
    const result = await db.query("select * from tabela")
    return result.rows
  }

  async create({nome, schema} = dados) {
    try {
      const query = `INSERT INTO tabela (nome, schema) VALUES ($1, $2) RETURNING *`
      const result = await db.query(query,[nome, schema])
      return result.rows
    } 
    catch(error) {
      return error
    }
  }

  async update({id, nome, schema} = dados) {
    try {
      const query = `UPDATE public.tabela SET nome= $1, schema= $2 WHERE id = $3 RETURNING *`
      const result = await db.query(query, [nome, schema, id])
      return result.rows
    }
    catch(error) {
      return error
    }
  }

  async delete(idTabela) {
    try {
      const query = `DELETE FROM public.tabela WHERE id = $1 RETURNING *`
      const result = await db.query(query, [idTabela])
      return result.rows
    }
    catch(error) {
      return error
    }
  }

}

module.exports = Model