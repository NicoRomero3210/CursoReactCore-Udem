import React, { Component } from 'react'

class Entrada extends Component {
  
  /*aca creo la ref entrada, al elemento que le de esta ref se lo podria referenciar usando la misma
  esto es para evitar apuntar con el elementByid o className*/      
  entrada = React.createRef()

  //Aca lo que hace es que ni bien se monte el componente se haga foco en el, tmb usando la ref entrada
  componentDidMount () {
    this.focus()
  }

  //Apunto a entrada, es decir, al input, para que al tocar este boton haga foco en el
  focus = () => {
    this.entrada.current.focus()
  }

  //Lo mismo que en los casos anteriores
  blur = () => {
    this.entrada.current.blur()
  }

  render () {
    return (
      <div>
        <h1>React refs ðŸ¦„</h1>
        <input
          type="text"
          ref={this.entrada} /*Aca le estoy pasando la ref a este elemento, todo 
                                lo que apunte a la ref le sucede a este elemento*/
        />
        <button onClick={this.focus}>
          Focus
        </button>
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Entrada />
      </div>
    )
  }
}

export default App