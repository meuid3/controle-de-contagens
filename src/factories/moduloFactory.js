const ModuloRepository = require('../repositories/moduloRepository')
const ModuloService = require('../services/moduloService')

const generateInstanceModulo = (data) => {
  const moduloRepository = new ModuloRepository(data)
  const moduloService = new ModuloService(moduloRepository)
  return moduloService
}

module.exports = {generateInstanceModulo}