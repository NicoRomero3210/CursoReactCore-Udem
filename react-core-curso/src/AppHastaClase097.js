import React, { Component, useState } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useState
        <span
          role='img'
          aria-label='hook emoji'
        >
          âš“
        </span> 
      </h1>
    </header>
  )
}

/*Aca le paso el atributo clicks de lo que seria el estado y setClicks funciona como el setState, es decir,
es la funcion que al final va a actualizar el estado con los nuevos valores, en clases mas adelante
dice que se recomiendo un hook por propiedad que tenga el estado */

const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const addClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <Header />
      <button onClick={addClicks}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

// class App extends Component {
//   state = {
//     clicks: 0
//   }

//   addClicks = () => {
//     this.setState(state => ({
//       clicks: state.clicks + 1
//     }))
//   }

//   render () {
//     const { clicks } = this.state
//     return (
//       <div>
//         <Header />
//         <button onClick={this.addClicks}>
//           Clicks ({ clicks })
//         </button>
//       </div>
//     )
//   }
// }

export default App