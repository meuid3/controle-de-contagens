const {generateInstanceModulo} = require('./../factories/moduloFactory')

class Modulocontroller {

  async find(request, response) {
    try {
      const modulo = generateInstanceModulo()
      const {id} = request.params
      let result = await modulo.find(id)
      response.status(200).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async getAll(request, response) {
    try {
      const modulo = generateInstanceModulo()
      let result = await modulo.getAll()
      response.status(200).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.error
      })
    }
  }

  async create(request, response) {
    try {
      const modulo = generateInstanceModulo()
      let result = await modulo.create(request.body)
      response.status(201).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async update(request, response) {
    try {
      const modulo = generateInstanceModulo()
      let result = await modulo.update(request.body)
      response.status(201).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async delete(request, response) {
    try {
      const modulo = generateInstanceModulo()
      const {id} = request.params
      let result = await modulo.delete(id)
      response.status(200).json(result)
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

}

module.exports = new Modulocontroller()