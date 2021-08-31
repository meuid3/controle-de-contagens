class Usuario {
  
  constructor({id, nome, email, senha}) {
    this.id = id
    this.nome = nome
    this.email = email
    this.senha = senha
  }

  isValid() {
    const propriedades = Object.getOwnPropertyNames(this)
    const propriedadesInvalidas = propriedades
      .map( propriedade => {
        if(propriedade !== 'id' && propriedade !== 'nome') {
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

module.exports = Usuario