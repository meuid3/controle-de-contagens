const FuncionalidadeRepository = require('../repositories/funcionalidadeRepository')
const FuncionalidadeService = require('../services/funcionalidadeService')

const generateInstanceFuncionalidade = (data) => {
  const funcionalidadeRepository = new FuncionalidadeRepository(data)
  const funcionalidadeService = new FuncionalidadeService(funcionalidadeRepository)
  return funcionalidadeService
}

module.exports = {generateInstanceFuncionalidade}