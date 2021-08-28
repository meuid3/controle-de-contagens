const {generateInstanceFuncionalidadeTabelaFactory} = require('../factories/funcionalidadeTabelaFactory')

class FuncionalidadeTabelaController {
  async vincularFuncionalidadeTabela(request, response) {
    try {
      const funcionalidadeTabela = generateInstanceFuncionalidadeTabelaFactory()
      const result = await funcionalidadeTabela.vincularTabelaFuncionalidade(request.body)
      response.status(201).json(result)

    } catch(error) {
      response.status(500).json({
        message: error.message
      })
    }
  }


}

module.exports = new FuncionalidadeTabelaController()