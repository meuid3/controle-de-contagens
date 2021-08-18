class TabelaRepository {
  
  constructor(table) {
    this.table = table
  }

  async find(idTabela) {
    return await {
      id:1,
      nome: "tb_usuario",
      schema: "public"
    }  
  }

  async create(data) {

  }
}

module.exports = TabelaRepository;