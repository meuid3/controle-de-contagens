const {Router} = require('express')
const UsuarioController = require('../controller/usuarioController')

const usuarioRouter = Router()

usuarioRouter.get('/', UsuarioController.getAll)
usuarioRouter.get('/:id', UsuarioController.find)
usuarioRouter.post('/create', UsuarioController.create)
usuarioRouter.post('/update', UsuarioController.update)
usuarioRouter.post('/excluir/:id', UsuarioController.delete)

module.exports = {usuarioRouter}