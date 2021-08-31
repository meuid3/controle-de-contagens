const AutenticacaoService = require('../services/autenticacaoService')

class AutenticacaoController {

  async login(request, response) {
    try {
      const dados = request.body
      const autenticacaoService = new AutenticacaoService()
      const usuarioLogado = await autenticacaoService.login(dados)
      response.status(200).json(usuarioLogado)
  
    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }

  }
}

module.exports = new AutenticacaoController()