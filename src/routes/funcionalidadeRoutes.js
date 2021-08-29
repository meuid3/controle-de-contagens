const {Router} = require('express')
const FuncionalidadeController = require('../controller/funcionalidadeController')

const funcionalidadeRouter = Router()

funcionalidadeRouter.get('/', FuncionalidadeController.getAll)
funcionalidadeRouter.get('/:id', FuncionalidadeController.find)
funcionalidadeRouter.post('/create', FuncionalidadeController.create)
funcionalidadeRouter.post('/update', FuncionalidadeController.update)
funcionalidadeRouter.post('/excluir/:id', FuncionalidadeController.delete)
funcionalidadeRouter.get('/funcionalidade-completa/:id', FuncionalidadeController.getFuncionalidadeCompletaById)

module.exports = {funcionalidadeRouter}