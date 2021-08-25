const FuncionalidadeTabelaRepository = require('../repositories/funcionalidadeTabelaRepository')
const FuncionalidadeTabelaService = require('../services/funcionalidadeTabelaService')

const generateInstanceFuncionalidadeTabelaFactory = (data) => {
  const funcionalidadeTabelaRepository = new FuncionalidadeTabelaRepository(data)
  const funcionalidadeTabelaService = new FuncionalidadeTabelaService(funcionalidadeTabelaRepository)
  return funcionalidadeTabelaService
}

module.exports = {generateInstanceFuncionalidadeTabelaFactory}