const {compare} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const Mensagens = require('../mensagens')
const {jwt} = require('../../authentication/config')
const UsuarioRepository = require('../repositories/usuarioRepository')

class AutenticacaoService {

  async login({email, senha} = dados) {
    const usuarioRepository = new UsuarioRepository()
    const usuario = await usuarioRepository.buscaUsuarioPorEmail(email)

    if(!usuario)
      throw new Error(Mensagens.EMAIL_OU_SENHA_INVALIDOS)
    
    const senhaCompativel = await compare(senha, usuario.senha)

    if(!senhaCompativel)
      throw new Error(Mensagens.EMAIL_OU_SENHA_INVALIDOS)
    
    const {secret, expiresIn} = jwt

    const token = sign(
      {
        nomeUsuario: usuario.nome
      },
      secret,
      {
        subject: usuario.id.toString(),
        expiresIn: expiresIn
      }
    )

    delete usuario.senha

    return {
      usuario: usuario,
      token: token
    }

  }

}

module.exports = AutenticacaoService