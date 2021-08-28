const {generateTabelaInstance} = require('./../factories/tabelaFactory')

class TabelaController {
  
  async find(request, response) {
    try {
      const tabela = generateTabelaInstance()
      const {id} = request.params
      let result = await tabela.find(id)
      response.status(200).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async getAll(request, response) {
    try {
      const tabela = generateTabelaInstance()
      let result = await tabela.getAll()
      response.json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async create(request, response) {
    try {
      const tabela = generateTabelaInstance()
      let result = await tabela.create(request.body)
      response.status(201).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async update(request, response) {
    try {
      const tabela = generateTabelaInstance()
      let result = await tabela.update(request.body)
      response.status(201).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async delete(request, response) {
    try {
      const tabela = generateTabelaInstance()
      const {id} = request.params
      let result = await tabela.delete(id)
      response.status(200).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }
}

module.exports = new TabelaController()