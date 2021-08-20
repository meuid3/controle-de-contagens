const Tabela = require('./../entities/tabela')

class TabelaService {

  constructor(tabelaRepository) {
    this.tabelaRepository = tabelaRepository
  }

  async find(idTabela) {
    return await this.tabelaRepository.find(idTabela)
  }

  async create(data) {
    const tabela = new Tabela(data)
    if(tabela.isValid().status) {
      return this.tabelaRepository.create(tabela)
    }

    return {message: tabela.isValid().campos}
  }
}

module.exports = TabelaService