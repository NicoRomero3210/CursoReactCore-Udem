import React, { Component } from 'react'

/* Esto se usa para pasar una ref desde un componente padre a un componente hijo
pero solo funciona si el hijo es un componente funcional */
const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
))

class App extends Component {
  entrada = React.createRef()

  componentDidMount () {
    console.log(this.entrada)
  }

  render () {

    return (
      <div>
        <FancyInput ref={this.entrada} /*Aca le paso la Ref al componente hijo*/ /> 
      </div>
    )
  }
}

export default App