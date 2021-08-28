const FuncionalidadeTabela = require('../entities/funcionalidadeTabela')
const Mensagens = require('../mensagens')

class FuncionalidadeTabelaService {

  constructor(funcionalidadeTabelaRepository) {
    this.funcionalidadeTabelaRepository = funcionalidadeTabelaRepository
  }

  async getAll() {
    return await this.funcionalidadeTabelaRepository.getAll()
  }

  async find(idFuncionalidadeTabela) {
    if(!isNaN(idFuncionalidadeTabela)) {
      return await this.funcionalidadeTabelaRepository.find(idFuncionalidadeTabela)
    }
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }

  async create(data) {
    const funcionalidadeTabela = new FuncionalidadeTabela(data)
    return await this.funcionalidadeTabelaRepository.create(funcionalidadeTabela)
  }

  async update(data) {
    return await this.funcionalidadeTabelaRepository.update(data)
  }

  async delete(idFuncionalidadeTabela) {
    if(!isNaN(idFuncionalidadeTabela)) {
      return await this.funcionalidadeTabelaRepository.delete(idFuncionalidadeTabela)
    }

    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }
}

module.exports = FuncionalidadeTabelaService