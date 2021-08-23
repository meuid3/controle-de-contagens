const {Router} = require('express')
const {generateInstance} = require('./../factories/tabelaFactory')

const tabelaRouter = Router()

tabelaRouter.get('/', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.getAll()
  response.json(result)
})

tabelaRouter.get('/:id', async (request, response) => {
  const tabela = generateInstance()
  const {id} = request.params
  let result = await tabela.find(id)
  response.json(result)
})

tabelaRouter.post('/create', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.create(request.body)
  response.status(200).json(result)
})

tabelaRouter.post('/update', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.update(request.body)
  response.status(200).json(result)
})

tabelaRouter.post('/excluir/:id', async (request, response) => {
  const tabela = generateInstance()
  const {id} = request.params
  let result = await tabela.delete(id)
  response.status(200).json(result)
})

module.exports = {tabelaRouter}