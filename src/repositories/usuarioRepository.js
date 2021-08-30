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
}

module.exports = UsuarioRepository