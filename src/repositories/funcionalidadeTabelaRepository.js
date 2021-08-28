const Model = require('./Model')
const Mensagens = require('../mensagens')

class FuncionalidadeTabelaRepository extends Model {

  constructor() {
    super({
      properties: [
        {
          name: 'id',
          isNull: false
        },
        {
          name: 'tabela_id',
          isNull: true
        },
        {
          name: 'funcionalidade_id',
          isNull: true
        }
      ],
      table: 'funcionalidade_tabela',
      schema: 'public',
      primaryKey: 'id',
      generateExternalId: false
    })
  }

  async getTabelasByFuncionalidadeId(idFuncionalidade) {
    if(idFuncionalidade) {
      const query = `
        SELECT 	t.id, t.nome, t.schema
        FROM funcionalidade_tabela ft 
        INNER JOIN funcionalidade f ON ft.funcionalidade_id  = f.id
        INNER JOIN tabela t ON ft.tabela_id  = t.id
        WHERE f.id = $1
      `
      const result = await this.db.query(query,[idFuncionalidade])
      return result.rows
    }

    throw new Error(Mensagens.PARAMETRO_ID_OBRIGATORIO)
  }
}

module.exports = FuncionalidadeTabelaRepository