const {Router} = require('express')
const TabelaController = require('../controller/tabelaController')

const tabelaRouter = Router()

tabelaRouter.get('/', TabelaController.getAll)
tabelaRouter.get('/:id', TabelaController.find)
tabelaRouter.post('/create', TabelaController.create)
tabelaRouter.post('/update', TabelaController.update)
tabelaRouter.post('/excluir/:id', TabelaController.delete)

module.exports = {tabelaRouter}