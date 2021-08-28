const Mensagens = require('../mensagens')
const {generateTabelaInstance} = require('../factories/tabelaFactory')
const FuncionalidadeTabela = require('../entities/funcionalidadeTabela')
const {generateInstanceFuncionalidade} = require('../factories/funcionalidadeFactory')
const FuncionalidadeTabelaRepository = require('../repositories/funcionalidadeTabelaRepository')

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

    this._verificaExistenciaFuncionalidadesDb(tabela, funcionalidade) 

    await this._verificaExistenciaDeVinculoFuncionalidadeTabela(
      funcionalidade.id, 
      tabela.id
    )
    
    const result = this.create({
      tabela_id: tabela.id,
      funcionalidade_id: funcionalidade.id
    })

    return result
  }

  async getTabelasByFuncionalidadeId(idFuncionalidade) {
    if(!isNaN(idFuncionalidade)) {
      const result = await this.funcionalidadeTabelaRepository
        .getTabelasByFuncionalidadeId(idFuncionalidade)
        
      return result
    }
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }

  _verificaExistenciaFuncionalidadesDb(tabela, funcionalidade) {
    if(!tabela.id) 
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'tabela'))
    
    if(!funcionalidade.id)
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'funcionalidade'))
  }

  async _verificaExistenciaDeVinculoFuncionalidadeTabela(funcionalidadeId, tabelaId) {
    const funcionalidadeTabela = new FuncionalidadeTabelaRepository()
    const vinculo = await funcionalidadeTabela.getTabelasByFuncionalidadeId(funcionalidadeId)
    
    let vinculos = vinculo.filter(tabela => {
      return tabela.id === tabelaId
    })

    if(vinculos.length > 0)
      throw new Error(Mensagens.TABELA_JA_VINCULADA_A_FUNCIONALIDADE)
  }

}

module.exports = FuncionalidadeTabelaService