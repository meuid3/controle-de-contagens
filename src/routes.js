const {Router} = require('express')
const { tabelaRouter } = require('./routes/tabelaRoutes')

const routes = Router()

routes.use('/tabela', tabelaRouter)

module.exports = {routes}