const {Router} = require('express')
const {generateInstance} = require('./../factories/tabelaFactory')

const tabelaRouter = Router()

tabelaRouter.get('/', async (request, response) => {
  const tabela = generateInstance()
  let result = await tabela.find(1)
  response.json(result)
})

module.exports = {tabelaRouter}