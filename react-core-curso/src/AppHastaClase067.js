import React, { Component } from 'react'

class App extends Component {
  state = {
    users: [],
    cargando: true
  }

  /*Este didMount lo que hace es, ni bien cargo el primer componente, me tira lo primero que le digo, ademas es
  Asimcrono asique hace cosas en cualquier momento una vez el primer componente este cargado*/
  componentDidMount () {
    /*Uso la funcion fetch y ese sitio de prueba para traer datos y ver que efecto tiene el didMount*/
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }

  render () {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <h1>Peticion HTTP</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              { user.name }
              <a href={`http://${user.website}`}>
                Website
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App