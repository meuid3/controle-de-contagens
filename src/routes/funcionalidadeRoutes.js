const {Router} = require('express')
const {generateInstanceFuncionalidade} = require('./../factories/funcionalidadeFactory')

const funcionalidadeRouter = Router()

funcionalidadeRouter.get('/', async (request, response) => {
  const funcionalidade = generateInstanceFuncionalidade()
  let result = await funcionalidade.getAll()
  response.json(result)
})

funcionalidadeRouter.get('/:id', async (request, response) => {
  const funcionalidade = generateInstanceFuncionalidade()
  const {id} = request.params
  let result = await funcionalidade.find(id)
  response.json(result)
})

funcionalidadeRouter.post('/create', async (request, response) => {
  const funcionalidade = generateInstanceFuncionalidade()
  let result = await funcionalidade.create(request.body)
  response.status(200).json(result)
})

funcionalidadeRouter.post('/update', async (request, response) => {
  const funcionalidade = generateInstanceFuncionalidade()
  let result = await funcionalidade.update(request.body)
  response.status(200).json(result)
})

funcionalidadeRouter.post('/excluir/:id', async (request, response) => {
  const funcionalidade = generateInstanceFuncionalidade()
  const {id} = request.params
  let result = await funcionalidade.delete(id)
  response.status(200).json(result)
})

module.exports = {funcionalidadeRouter}