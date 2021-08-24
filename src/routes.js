const {Router} = require('express')
const { moduloRouter } = require('./routes/moduloRoutes')
const { tabelaRouter } = require('./routes/tabelaRoutes')
const { funcionalidadeRouter } = require('./routes/funcionalidadeRoutes')

const routes = Router()

routes.use('/tabela', tabelaRouter)
routes.use('/modulo', moduloRouter)
routes.use('/funcionalidade', funcionalidadeRouter)

module.exports = {routes}