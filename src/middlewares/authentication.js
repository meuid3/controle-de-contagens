const {verify} = require('jsonwebtoken')
const Mensagens = require('../mensagens')
const {jwt} = require('../../authentication/config')


const autenticacao = (request, response, next) => {
  try {
    const authHeader = request.headers.authorization

    if(!authHeader)
      throw new Error(Mensagens.CHAVE_DE_AUTENTICACAO_INEXISTENTE)
    
    const [, token] = authHeader.split(' ')
    const {secret} = jwt
  
    const tokenDecodificado = verify(token, secret)
    const { sub } = tokenDecodificado

    request.usuario = {
      id:sub
    }

    return next()

  } catch( error) {
    response.status(500).json({
      message: Mensagens.OCORREU_UM_ERRO_AO_REALIZAR_A_AUTENTICACAO
    })
  }
}

module.exports = {autenticacao}