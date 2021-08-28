const {Router} = require('express')
const FuncionalidadeTabelaController = require('../controller/funcionalidadeTabelaController')

const funcionalidadeTabelaRouter = Router()

funcionalidadeTabelaRouter.post(
  '/vincular', 
  FuncionalidadeTabelaController.vincularFuncionalidadeTabela
)

module.exports = {funcionalidadeTabelaRouter}