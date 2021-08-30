const UsuarioService = require('../services/usuarioService')
const UsuarioRepository = require('../repositories/usuarioRepository')

const generateInstanceUsuario = (data) => {
  const usuarioRepository = new UsuarioRepository(data)
  const usuarioService = new UsuarioService(usuarioRepository)
  return usuarioService
}

module.exports = {generateInstanceUsuario}