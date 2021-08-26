const {generateInstanceFuncionalidade} = require('./../factories/funcionalidadeFactory')

class FuncionalidadeController {
  
  async find(request, response) {
    const funcionalidade = generateInstanceFuncionalidade()
    const {id} = request.params
    let result = await funcionalidade.find(id)
    response.json(result)
  }

  async getAll(request, response) {
    const funcionalidade = generateInstanceFuncionalidade()
    let result = await funcionalidade.getAll()
    response.status(200).json(result)
  }

  async create(request, response) {
    const funcionalidade = generateInstanceFuncionalidade()
    let result = await funcionalidade.create(request.body)
    response.status(200).json(result)
  }

  async update(request, response) {
    const funcionalidade = generateInstanceFuncionalidade()
    let result = await funcionalidade.update(request.body)
    response.status(200).json(result)
  }

  async delete(request, response) {
    const funcionalidade = generateInstanceFuncionalidade()
    const {id} = request.params
    let result = await funcionalidade.delete(id)
    response.status(200).json(result)
  }

}

module.exports = new FuncionalidadeController()