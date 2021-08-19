const {Router} = require('express')
const {generateInstance} = require('./../factories/tabelaFactory')

const tabelaRouter = Router()

tabelaRouter.get('/', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.find(1)
  response.json(result)
})

tabelaRouter.post('/create', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.create(request.body)
  response.status(200).json(result)
})

module.exports = {tabelaRouter}