const Model = require('./Model')

class FuncionalidadeRepository extends Model {
  constructor() {
    super({
      properties: [
        {
          name: 'id',
          isNull: false
        },
        {
          name: 'nome',
          isNull: false
        },
        {
          name: 'modulo_id',
          isNull: false
        }
      ],
      table: "funcionalidade",
      schema: "public",
      primaryKey: "id",
      generateExternalId: false
    })
  }
}

module.exports = FuncionalidadeRepository