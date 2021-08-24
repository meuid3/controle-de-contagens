const Modulo = require('./../entities/modulo')

class ModuloService {
  
  constructor(moduloRepository) {
    this.moduloRepository = moduloRepository
  }

  async getAll() {
    return await this.moduloRepository.getAll()
  }

  async find(idModulo) {
    if(idModulo) {
      if(!isNaN(idModulo)) {
        return await this.moduloRepository.find(idModulo)
      } else {
        return {message: `o id informado é inválido!`}
      }
    }
  }

  async create(data) {
    const modulo = new Modulo(data)
    if(modulo.isValid().status) {
      return await this.moduloRepository.create(modulo)
    }

    return {message: modulo.isValid().campos}
  }

  async update(data) {
      return await this.moduloRepository.update(data)
  }

  async delete(idModulo) {
    return await this.moduloRepository.delete(idModulo)
  }
}
module.exports = ModuloService