import React, { Component } from 'react'

const frutas = [
  'fresa',
  'manzana',
  'sandia',
  'kiwi',
  'durazno',
  'mango',
  'piÃ±a'
]

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          {frutas.map((fruta) => {
            return (
              <li>{fruta}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App