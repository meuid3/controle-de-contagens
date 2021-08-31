const Model = require('./Model')

class UsuarioRepository extends Model {
  
  constructor() {
    super({
      properties: [
        {
          name:'id',
          isNull: false
        },
        {
          name:'nome',
          isNull: false
        }, 
        {
          name:'email',
          isNull: false
        },
        {
          name:'senha',
          isNull: false
        }
      ],
      table: "usuario",
      schema: "public",
      primaryKey: "id",
      generateExternalId: false
    })
  }

  async buscaUsuarioPorEmail(email) {
    const query = `SELECT id, nome, email, senha FROM public.usuario WHERE email = $1`
    const result = await this.db.query(query, [email])
    return result.rows.shift()
  }
}

module.exports = UsuarioRepository