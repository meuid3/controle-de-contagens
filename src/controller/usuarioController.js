const {generateInstanceUsuario} = require('./../factories/usuarioFactory')

class UsuarioController {

  async find(request, response) {
    try {
      const {id} = request.params
      const usuario = generateInstanceUsuario()
      const result = await usuario.find(id)
      response.status(200).json(result)

    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async getAll(request, response) {
    try {
      const usuario = generateInstanceUsuario()
      const result = await usuario.getAll()
      response.status(200).json(result)
      
    } catch(error) {
      response.status(500).json({
        message: error.error
      })
    }
  }

  async create(request, response) {
    try {
      const dados = request.body
      const usuario = generateInstanceUsuario()
      const result = usuario.create(dados)
      response.status(201).json(result)

    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async update(request, response) {
    try {
      const dados = request.body
      const usuario = generateInstanceUsuario()
      const result = usuario.update(dados)
      response.status(201).json(result)
     
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

  async delete(request, response) {
    try {
      const {id} = request.params
      const usuario = generateInstanceUsuario()
      const result = usuario.delete(id)
      response.status(200).json(result)

    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }

}

module.exports = new UsuarioController()