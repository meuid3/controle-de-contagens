const {Router} = require('express')
const { moduloRouter } = require('./routes/moduloRoutes')
const { tabelaRouter } = require('./routes/tabelaRoutes')
const { usuarioRouter} = require('./routes/usuarioRoutes')
const { funcionalidadeRouter } = require('./routes/funcionalidadeRoutes')
const { funcionalidadeTabelaRouter } = require('./routes/funcionalidadeTabelaRoutes')

const routes = Router()

routes.use('/tabela', tabelaRouter)
routes.use('/modulo', moduloRouter)
routes.use('/usuario', usuarioRouter)
routes.use('/funcionalidade', funcionalidadeRouter)
routes.use('/funcionalidadeTabela', funcionalidadeTabelaRouter)

module.exports = {routes}