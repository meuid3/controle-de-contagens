const Funcionalidade = require('../entities/funcionalidade')
const Mensagens = require('../mensagens')

class FuncionalidadeService {
  constructor(funcionalidadeRepository) {
    this.funcionalidadeRepository = funcionalidadeRepository
  }

  async getAll() {
    return await this.funcionalidadeRepository.getAll()
  }

  async find(idFuncionalidade) {
    if(!isNaN(idFuncionalidade)) {
      return await this.funcionalidadeRepository.find(idFuncionalidade)
    }

    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }

  async create(data) {
    const funcionalidade = new Funcionalidade(data)
    if(funcionalidade.isValid().status) {
      return await this.funcionalidadeRepository.create(funcionalidade)
    } 

    throw new Error(funcionalidade.isValid().property.shift())
  }

  async update(data) {
    if(data.id) {
      return await this.funcionalidadeRepository.update(data)
    } 
    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }

  async delete(idFuncionalidade) {
    if(!isNaN(idFuncionalidade)) {
      return await this.funcionalidadeRepository.delete(idFuncionalidade)
    }
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }
}

module.exports = FuncionalidadeService