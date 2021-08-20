const {DB} = require('../../db/db')

class TabelaRepository {
  
  async find(idTabela) {
    try {
      const db = await new DB().getConnection()
      const query = `SELECT * FROM public.tabela WHERE id = $1`
      const result = await db.query(query, [idTabela])
      return result.rows
    }
    catch(error) {
      return error
    }
  }

  async getAll() {
    const db = await new DB().getConnection()
    const result = await db.query("select * from tabela")
    return result.rows
  }

  async create({nome, schema} = dados) {
    try {
      const db = await new DB().getConnection()
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
      const db = await new DB().getConnection()
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
      const db = await new DB().getConnection()
      const query = `DELETE public.tabela where id = $1 RETURNING *`
      const result = await db.query(query, [idTabela])
      return result.rows
    }
    catch(error) {
      return error
    }
  }

}

module.exports = TabelaRepository