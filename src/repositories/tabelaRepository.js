const Model = require('./Model')

class TabelaRepository extends Model{

  constructor() {
    super({
      properties: ['nome', 'schema', 'id'],
      table: "tabela",
      schema: "public",
      primaryKey: "id"
    })
  }
}

module.exports = TabelaRepository