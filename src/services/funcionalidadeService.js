const Mensagens = require('../mensagens')
const Funcionalidade = require('../entities/funcionalidade')
const FuncionalidadeRepository = require('../repositories/funcionalidadeRepository')
const {generateInstanceModulo} = require('../factories/moduloFactory')
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

  async getFuncionalidadeCompletaById(idFuncionalidade) {
    if(idFuncionalidade) {
      const funcionalidadeRepository = new FuncionalidadeRepository()
      const dados = await funcionalidadeRepository.find(idFuncionalidade)

      const moduloFactory = generateInstanceModulo()
      const modulo = await moduloFactory.find(dados.modulo_id)
     
      const funcionalidadeTabela = generateInstanceFuncionalidadeTabelaFactory()
      const tabelas = await funcionalidadeTabela.getTabelasByFuncionalidadeId(dados.id)
      
      dados.modulo = modulo
      dados.tabelas = tabelas

      const funcionalidade = new Funcionalidade(dados)
      return funcionalidade
    }

    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }
}

module.exports = FuncionalidadeService