const {hash} = require('bcryptjs')
const Mensagens = require('../mensagens')
const Usuario = require('./../entities/usuario')

class UsuarioService {

  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository
  }

  async getAll() {
    return await this.usuarioRepository.getAll()
  }

  async find(idUsuario) {
    if(!isNaN(idUsuario)) {
      return await this.usuarioRepository.find(idUsuario)
    } else {
      throw new Error(Mensagens.PARAMETRO_INVALIDO)
    }
  }

  async create(data) {
    const senhaCriptografada = await hash(data.senha, 8)
    data.senha = senhaCriptografada
    const usuarioCriado = await this.usuarioRepository.create(data)

    delete usuarioCriado.id
    delete usuarioCriado.senha
    
    return usuarioCriado
  }

  async update(data) {
    if(data.id) {
      return await this.usuarioRepository.update(data)
    }

    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }

  async delete(idUsuario) {
    if(!isNaN(idUsuario)) {
      return await this.usuarioRepository.delete(idUsuario)
    }
    
    throw new Error(Mensagens.PARAMETRO_INVALIDO)
  }
}

module.exports = UsuarioService