import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Gerardo Gallegos'

const user1 = {
  name: 'Gerardo Gallegos',
  age: 28,
  country: 'Mexico'
}

function getInfo (user) {
  return `Hola mi nombre es ${user.name} y soy de ${user.country}`
}

const App = <h1>{ getInfo(user1) }</h1>

ReactDOM.render(App, document.getElementById('root'))
