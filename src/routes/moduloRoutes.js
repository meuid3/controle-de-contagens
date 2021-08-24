const {Router} = require('express')
const {generateInstanceModulo} = require('./../factories/moduloFactory')

const moduloRouter = Router()

moduloRouter.get('/', async (request, response) => {
  const modulo = generateInstanceModulo()
  let result = await modulo.getAll()
  response.json(result)
})

moduloRouter.get('/:id', async (request, response) => {
  const modulo = generateInstanceModulo()
  const {id} = request.params
  let result = await modulo.find(id)
  response.json(result)
})

moduloRouter.post('/create', async (request, response) => {
  const modulo = generateInstanceModulo()
  let result = await modulo.create(request.body)
  response.status(200).json(result)
})

moduloRouter.post('/update', async (request, response) => {
  const modulo = generateInstanceModulo()
  let result = await modulo.update(request.body)
  response.status(200).json(result)
})

moduloRouter.post('/excluir/:id', async (request, response) => {
  const modulo = generateInstanceModulo()
  const {id} = request.params
  let result = await modulo.delete(id)
  response.status(200).json(result)
})

module.exports = {moduloRouter}