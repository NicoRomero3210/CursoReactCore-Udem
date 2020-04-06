import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    ðŸ¦„
  </span>
)

/*La principal diferencia que se presenta con los inputs controlados es que pueden realizarse validaciones como
las que se hacen aca en este ejemplo*/

class InputControlado extends Component {
  state = {
    text: '',
    color: '#E8E8E8'
  }
  /*con esa funcion actializar basicamene hace la validacion, preguntando si la cadena tiene longitud 5 o menos
  */
  actualizar = (event) => {
    const text = event.target.value
    let color = 'green'

    if (text.trim() === '') {
      color = '#E8E8E8'
    }

    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })
  }

  render () {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
      />
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>Input Controlado <Unicorn /></h1>
        <InputControlado />
      </div>
    )
  }
}

export default App