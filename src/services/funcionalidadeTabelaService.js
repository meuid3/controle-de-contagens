class FuncionalidadeTabelaService {

  constructor(funcionalidadeTabelaRepository) {
    this.funcionalidadeTabelaRepository = funcionalidadeTabelaRepository
  }

  async getAll() {
    return await this.funcionalidadeTabelaRepository.getAll()
  }

  async find(idFuncionalidadeTabela) {
    if(idFuncionalidadeTabela) {
      if(!isNaN(idFuncionalidadeTabela)) {
        return await this.funcionalidadeTabelaRepository.find(idFuncionalidadeTabela)
      } else {
        return {message: `o id informado é inválido!`}
      }
    }
  }

  async create(data) {
    const funcionalidadeTabela = new Funcionalidade(data)
    if(funcionalidade.isValid().status) {
      return await this.funcionalidadeTabelaRepository.create(funcionalidadeTabela)
    }

    return {message: funcionalidade.isValid().campos}
  }

  async update(data) {
      return await this.funcionalidadeTabelaRepository.update(data)
  }

  async delete(idFuncionalidadeTabela) {
    return await this.funcionalidadeTabelaRepository.delete(idFuncionalidadeTabela)
  }

}
module.exports = FuncionalidadeTabelaService