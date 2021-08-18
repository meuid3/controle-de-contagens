const {Router} = require('express')

const tabelaRouter = Router()

tabelaRouter.get('/', (request, response)=> {
  response.json({message: "Rota de Tabela"})
})

module.exports = {tabelaRouter}