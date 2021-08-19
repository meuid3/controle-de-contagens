class TabelaRepository {
  
  constructor(dados) {
    this.dados = dados
  }

  getDados() {
    return this.dados
  }

  async find(idTabela) {
    return []
  }

  async create(dados) {

  }
}

module.exports = TabelaRepository