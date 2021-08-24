class FuncionalidadeTabela {
  constructor({id, tabelaId, funcionalidadeId }) {
    this.id = id
    this.tabelaId = tabelaId
    this.funcionalidadeId = funcionalidadeId 
  }

  isValid() {
    const propriedades = Object.getOwnPropertyNames(this)
    const propriedadesInvalidas = propriedades
      .map( propriedade => {
        if(propriedade !== 'id') {
          return !!this[propriedade] ? null : `${propriedade} não informado`
        }
      })
      .filter(propriedade => !!propriedade)

    return {
      status: propriedadesInvalidas.length == 0,
      property: propriedadesInvalidas
    }
  }

}

module.exports = FuncionalidadeTabela