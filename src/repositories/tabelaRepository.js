const Model = require('./Model')

class TabelaRepository extends Model{

  constructor() {
    super({
      properties: [
        {
          name:'schema',
          isNull: false
        },
        {
          name:'id',
          isNull: false
        }, 
        {
          name:'nome',
          isNull: false
        }
      ],
      table: "tabela",
      schema: "public",
      primaryKey: "id",
      generateExternalId: false
    })
  }
}

module.exports = TabelaRepository