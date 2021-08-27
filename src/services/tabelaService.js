const Tabela = require('./../entities/tabela')
const Mensagens = require('../mensagens')

class TabelaService {

  constructor(tabelaRepository) {
    this.tabelaRepository = tabelaRepository
  }

  async getAll() {
    return await this.tabelaRepository.getAll()
  }

  async find(idTabela) {
    if(!isNaN(idTabela)) {
      return await this.tabelaRepository.find(idTabela)
    } else {
      throw new Error(Mensagens.PARAMETRO_INVALIDO)
    }
  }

  async create(data) {
    const tabela = new Tabela(data)
    if(tabela.isValid().status) {
      return await this.tabelaRepository.create(tabela)
    }

    throw new Error(tabela.isValid().property.shift())
  }

  async update(data) {
    if(data.id) {
      return await this.tabelaRepository.update(data)
    }

    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }

  async delete(idTabela) {
    if(!isNaN(idTabela)) {
      return await this.tabelaRepository.delete(idTabela)
    }
    
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }
}

module.exports = TabelaService