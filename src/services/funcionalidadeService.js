const Funcionalidade = require('../entities/funcionalidade')

class FuncionalidadeService {
  constructor(funcionalidadeRepository) {
    this.funcionalidadeRepository = funcionalidadeRepository
  }

  async getAll() {
    return await this.funcionalidadeRepository.getAll()
  }

  async find(idFuncionalidade) {
    if(idFuncionalidade) {
      if(!isNaN(idFuncionalidade)) {
        return await this.funcionalidadeRepository.find(idFuncionalidade)
      } else {
        return {message: `o id informado é inválido!`}
      }
    }
  }

  async create(data) {
    const funcionalidade = new Funcionalidade(data)
    if(funcionalidade.isValid().status) {
      return await this.funcionalidadeRepository.create(funcionalidade)
    }

    return {message: funcionalidade.isValid().campos}
  }

  async update(data) {
      return await this.funcionalidadeRepository.update(data)
  }

  async delete(idFuncionalidade) {
    return await this.funcionalidadeRepository.delete(idFuncionalidade)
  }
}

module.exports = FuncionalidadeService