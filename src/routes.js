const {Router} = require('express')
const { moduloRouter } = require('./routes/moduloRoutes')
const { tabelaRouter } = require('./routes/tabelaRoutes')

const routes = Router()

routes.use('/tabela', tabelaRouter)
routes.use('/modulo', moduloRouter)

module.exports = {routes}