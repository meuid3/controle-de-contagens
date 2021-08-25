class FuncionalidadeTabela {

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
}

module.exports = FuncionalidadeTabela