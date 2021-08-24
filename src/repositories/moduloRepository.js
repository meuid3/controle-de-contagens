const Model = require('./Model')

class ModuloRepository extends Model {
  constructor() {
    super({
      properties:[
        { name: 'id', isNull: false},
        { name: 'nome', isNull: false}
      ],
      table: "modulo",
      schema: "public",
      primaryKey: "id",
      generateExternalId: false
    })
  }
}

module.exports = ModuloRepository