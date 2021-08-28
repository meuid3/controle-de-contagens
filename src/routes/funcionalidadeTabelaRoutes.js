const {Router} = require('express')
const FuncionalidadeTabelaController = require('../controller/funcionalidadeTabelaController')

const funcionalidadeTabelaRouter = Router()

funcionalidadeTabelaRouter.post(
  '/vincular', 
  FuncionalidadeTabelaController.vincularFuncionalidadeTabela
)

funcionalidadeTabelaRouter.get(
  '/:idFuncionalidade', 
  FuncionalidadeTabelaController.getTabelasByFuncionalidadeId
)

module.exports = {funcionalidadeTabelaRouter}