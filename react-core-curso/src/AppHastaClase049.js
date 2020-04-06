import React, { Component } from 'react'

const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'EspaÃ±a'}
]

class App extends Component {
  render () {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index + user.name}>
              { user.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//EN LA PROPIEDAD KEY DEL ELEMENTO LI SE PUEDE PONER ASI COMO ESTA, ES DECIR CONCATENAR EL INDEX CON EL NOMBRE DE
//USARIO PERO NO ES LO MAS RECOMENDABLE, LO MEJOR SERIA PONER EL ID QUE VIENE DE LA BD, LO DEJO ASI AHORA
//PARA TENER UNA IDEA DE COMO HACER SI ES QUE EL ADM DE BD NO LE CREO UN ID A LAS FILAS DE LA BD QUE NECESITO
//ES DECIR, LO MEJOR SERIA PONER AHI user.id EN VEZ DE LA CONCATENACION LOCA QUE ESTA ACTUALMENTE

export default App