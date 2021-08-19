const {DB} = require('../../db/db')

class TabelaRepository {
  
  constructor(dados) {
    this.dados = dados
  }

  getDados() {
    return this.dados
  }

  async find(idTabela) {
    try{
      const db = await new DB().getConnection()
      const query = await db.query("select * from tabela")
      return query.rows
    } 
    catch( error ) {
      console.log(error)
    }

  }

  async create(dados) {

  }
}

module.exports = TabelaRepository