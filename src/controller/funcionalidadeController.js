const {generateInstanceFuncionalidade} = require('./../factories/funcionalidadeFactory')

class FuncionalidadeController {
  
  async find(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      const {id} = request.params
      let result = await funcionalidade.find(id)
      response.json(result)
    
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async getAll(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      let result = await funcionalidade.getAll()
      response.status(200).json(result)
    
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async create(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      let result = await funcionalidade.create(request.body)
      response.status(200).json(result)
    
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async update(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      let result = await funcionalidade.update(request.body)
      response.status(200).json(result)
    
    } catch(error){
      response.status(500).json({
        message: error.message
      })
    }
  }

  async delete(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      const {id} = request.params
      let result = await funcionalidade.delete(id)
      response.status(200).json(result)
    
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async vincularTabelaFuncionalidade(request, response) {
    try {
      const funcionalidade = generateInstanceFuncionalidade()
      const dados = request.body
      const result = await funcionalidade.vincularTabelaFuncionalidade(dados)
      response.status(201).json(result)

    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

}

module.exports = new FuncionalidadeController()