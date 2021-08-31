const Mensagens = require('../mensagens')
const Funcionalidade = require('../entities/funcionalidade')
const ModuloRepository = require('../repositories/moduloRepository')
const FuncionalidadeRepository = require('../repositories/funcionalidadeRepository')
const FuncionalidadeTabelaRepository = require('../repositories/funcionalidadeTabelaRepository')


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

      const moduloRepository = new ModuloRepository()
      const modulo = await moduloRepository.find(dados.modulo_id)
     
      const funcionalidadeTabelaRepository = new FuncionalidadeTabelaRepository()
      const tabelas = await funcionalidadeTabelaRepository.getTabelasByFuncionalidadeId(dados.id)
      
      dados.modulo = modulo
      dados.tabelas = tabelas

      const funcionalidade = new Funcionalidade(dados)
      this._validaAtributosFuncionalidade(funcionalidade)
      return funcionalidade
    }

    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }

  _validaAtributosFuncionalidade(dados) {
    if(!dados.modulo || !dados.tabelas) 
      throw new Error(
        Mensagens.A_INSTANCIA_ESTA_COM_VALORES_INCOMPLETOS.replace('{0}', 'Funcionalidade')
      )
  }
}

module.exports = FuncionalidadeService