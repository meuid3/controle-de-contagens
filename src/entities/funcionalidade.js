class Funcionalidade {
  constructor({id, nome, tabelas, modulo, modulo_id}) {
    this.id = id
    this.nome = nome
    this.modulo_id = modulo_id
    this.modulo = modulo
    this.tabelas = tabelas
  }

  isValid() {
    const propriedades = Object.getOwnPropertyNames(this)
    const propriedadesInvalidas = propriedades
      .map( propriedade => {
        if(
          propriedade !== 'id' 
          && propriedade !== 'modulo' 
          && propriedade !== 'tabelas' 
          && propriedade !== 'modulo_id' 
          && propriedade !== 'tabelas'
        ) {
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

module.exports = Funcionalidade