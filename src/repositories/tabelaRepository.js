const {DB} = require('../../db/db')

class TabelaRepository {
  
  constructor(dados) {
    this.dados = dados
  }

  getDados() {
    return this.dados
  }

  async find(idTabela) {
    try {
      const db = await new DB().getConnection()
      const result = await db.query("select * from tabela")
      return result.rows
    } 
    catch( error ) {
      return error
    }
  }

  async create({nome, schema} = dados) {
    try {
      const db = await new DB().getConnection()
      const query = `INSERT INTO tabela (nome, schema) VALUES ($1, $2) RETURNING *`
      const result = await db.query(query,[nome, schema])
      return result.rows
    } 
    catch( error ) {
      return error
    }
  }

}

module.exports = TabelaRepository