const {generateInstanceModulo} = require('./../factories/moduloFactory')

class Modulocontroller {

  async find(request, response) {
    const modulo = generateInstanceModulo()
    const {id} = request.params
    let result = await modulo.find(id)
    response.json(result)
  }

  async getAll(request, response) {
    const modulo = generateInstanceModulo()
    let result = await modulo.getAll()
    response.json(result)
  }

  async create(request, response) {
    const modulo = generateInstanceModulo()
    let result = await modulo.create(request.body)
    response.status(200).json(result)
  }

  async update(request, response) {
    const modulo = generateInstanceModulo()
    let result = await modulo.update(request.body)
    response.status(200).json(result)
  }

  async delete(request, response) {
    const modulo = generateInstanceModulo()
    const {id} = request.params
    let result = await modulo.delete(id)
    response.status(200).json(result)
  }

}

module.exports = new Modulocontroller()