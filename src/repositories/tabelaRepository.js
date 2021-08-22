const Model = require('./Model')

class TabelaRepository extends Model{

  constructor() {
    super({
      properties: ['nome', 'schema', 'id'],
      table: "tabela",
      schema: "public",
      primaryKey: "id",
      generateExternalId: false
    })
  }
}

module.exports = TabelaRepository