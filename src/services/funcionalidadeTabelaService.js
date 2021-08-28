const Mensagens = require('../mensagens')
const {generateTabelaInstance} = require('../factories/tabelaFactory')
const FuncionalidadeTabela = require('../entities/funcionalidadeTabela')
const {generateInstanceFuncionalidade} = require('../factories/funcionalidadeFactory')

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

  async vincularTabelaFuncionalidade({funcionalidade_id, tabela_id} = dados) {
    const tabelaFactory = generateTabelaInstance()
    const funcionalidadeFactory = generateInstanceFuncionalidade()

    const funcionalidade = await funcionalidadeFactory.find(funcionalidade_id)
    const tabela = await tabelaFactory.find(tabela_id)

    this._validaExistenciaFuncionalidadesDb(tabela, funcionalidade)
    
    const result = this.create({
      tabela_id: tabela.id,
      funcionalidade_id: funcionalidade.id
    })

    return result
  }

  async getFuncionalidadeTabelaById(idFuncionalidade) {
    if(!isNaN(idFuncionalidade)) {
      const result = await this.funcionalidadeTabelaRepository.getFuncionaliadadeTabelaById(idFuncionalidade)
      return result
    }
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }

  _validaExistenciaFuncionalidadesDb(tabela, funcionalidade) {
    if(!tabela.id) 
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'tabela'))
    
    if(!funcionalidade.id)
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'funcionalidade'))
  }

}

module.exports = FuncionalidadeTabelaService