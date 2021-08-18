class TabelaService {

  constructor({tabelaRepository}) {
    this.tabelaRepository = tabelaRepository
  }

  async find(idTabela) {
    return this.tabelaRepository.find(idTabela)
  }

  async create(data) {
    return this.tabelaRepository.create(data)
  }
}

module.exports = TabelaService