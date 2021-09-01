const cors = require('cors')
const {Router} = require('express')
const { corsAccess } = require('./middlewares/cors')
const { moduloRouter } = require('./routes/moduloRoutes')
const { tabelaRouter } = require('./routes/tabelaRoutes')
const { usuarioRouter} = require('./routes/usuarioRoutes')
const { autenticacaoRouter} = require('./routes/autenticacaoRoutes')
const { funcionalidadeRouter } = require('./routes/funcionalidadeRoutes')
const { funcionalidadeTabelaRouter } = require('./routes/funcionalidadeTabelaRoutes')

const routes = Router()

routes.use(cors())
routes.use(corsAccess)

routes.use('/tabela', tabelaRouter)
routes.use('/modulo', moduloRouter)
routes.use('/usuario', usuarioRouter)
routes.use('/login', autenticacaoRouter )
routes.use('/funcionalidade', funcionalidadeRouter)
routes.use('/funcionalidadeTabela', funcionalidadeTabelaRouter)

module.exports = {routes}