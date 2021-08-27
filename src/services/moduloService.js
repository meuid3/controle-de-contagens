const Modulo = require('./../entities/modulo')
const Mensagens = require('../mensagens')

class ModuloService {
  
  constructor(moduloRepository) {
    this.moduloRepository = moduloRepository
  }

  async getAll() {
    return await this.moduloRepository.getAll()
  }

  async find(idModulo) {
    if(!isNaN(idModulo)) {
      return await this.moduloRepository.find(idModulo)
    } 

    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }

  async create(data) {
    const modulo = new Modulo(data)
    if(modulo.isValid().status) {
      return await this.moduloRepository.create(modulo)
    }

    throw new Error(modulo.isValid().property.shift())
  }

  async update(data) {
    if(data.id) {
      return await this.moduloRepository.update(data)
    }
    
    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }

  async delete(idModulo) {
    if(!isNaN(idModulo)) {
      return await this.moduloRepository.delete(idModulo)
    }

    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }
}

module.exports = ModuloService