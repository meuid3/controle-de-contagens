const Tabela = require('./../entities/tabela')

class TabelaService {

  constructor(tabelaRepository) {
    this.tabelaRepository = tabelaRepository
  }

  async getAll() {
    return await this.tabelaRepository.getAll()
  }

  async find(idTabela) {
    if(idTabela) {
      if(!isNaN(idTabela)) {
        return await this.tabelaRepository.find(idTabela)
      } else {
        return {message: `o id informado é inválido!`}
      }
    }
  }

  async create(data) {
    const tabela = new Tabela(data)
    if(tabela.isValid().status) {
      return this.tabelaRepository.create(tabela)
    }

    return {message: tabela.isValid().campos}
  }

  async update(data) {
    const tabela = new Tabela(data)
    if(tabela.isValid().status) {
      return await this.tabelaRepository.update(tabela)
    }

    return {message: tabela.isValid().campos}
  }

  async delete(idTabela) {
    if(idTabela) {
      if(!isNaN(idTabela)) {
        return await this.tabelaRepository.delete(parseInt(idTabela))
      } else {
        return {message: `o id informado é inválido!`}
      }
    }
  }
}

module.exports = TabelaService