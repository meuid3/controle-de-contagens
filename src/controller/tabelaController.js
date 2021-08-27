const {generateInstance} = require('./../factories/tabelaFactory')

class TabelaController {
  
  async find(request, response) {
    const tabela = generateInstance()
    const {id} = request.params
    let result = await tabela.find(id)
    response.json(result)
  }

  async getAll(request, response) {
    const tabela = generateInstance()
    let result = await tabela.getAll()
    response.json(result)
  }

  async create(request, response) {
    const tabela = generateInstance()
    let result = await tabela.create(request.body)
    response.status(200).json(result)
  }

  async update(request, response) {
    const tabela = generateInstance()
    let result = await tabela.update(request.body)
    response.status(200).json(result)
  }

  async delete(request, response) {
    const tabela = generateInstance()
    const {id} = request.params
    let result = await tabela.delete(id)
    response.status(200).json(result)
  }
}

module.exports = new TabelaController()