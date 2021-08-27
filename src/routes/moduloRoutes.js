const {Router} = require('express')
const ModuloController = require('../controller/moduloController')

const moduloRouter = Router()

moduloRouter.get('/', ModuloController.getAll)
moduloRouter.get('/:id', ModuloController.find)
moduloRouter.post('/create', ModuloController.create)
moduloRouter.post('/update', ModuloController.update)
moduloRouter.post('/excluir/:id', ModuloController.delete)

module.exports = {moduloRouter}