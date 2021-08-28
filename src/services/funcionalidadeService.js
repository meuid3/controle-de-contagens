const Mensagens = require('../mensagens')
const Funcionalidade = require('../entities/funcionalidade')
const {generateTabelaInstance} = require('../factories/tabelaFactory')
const {generateInstanceFuncionalidadeTabelaFactory} = require('../factories/funcionalidadeTabelaFactory')

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

  async vincularTabelaFuncionalidade({funcionalidade_id, tabela_id} = dados) {
    
    const tabelaFactory = generateTabelaInstance()
    const funcionalidade = await this.find(funcionalidade_id)
    const tabela = await tabelaFactory.find(tabela_id)

    this.validaExistenciaFuncionalidadesDb(tabela, funcionalidade)
    
    const tabelaFuncionalidade = generateInstanceFuncionalidadeTabelaFactory()

    const result = tabelaFuncionalidade.create({
      tabela_id: tabela.id,
      funcionalidade_id: funcionalidade.id
    })

    return result
  }

  validaExistenciaFuncionalidadesDb(tabela, funcionalidade) {
    console.log(tabela)
    if(!tabela.id) 
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'tabela'))
    
    if(!funcionalidade.id)
      throw new Error(Mensagens.REGISTRO_NAO_ENCONTRADO.replace('{0}', 'funcionalidade'))
  }
}

module.exports = FuncionalidadeService