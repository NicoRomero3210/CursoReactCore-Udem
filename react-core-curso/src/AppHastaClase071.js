import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    movie: {},
    isFetching: false 
  }

  /*Aca lo que hace es dejar de usar la sintaxis de las promesas y usa el async await para hacer mas "entendible"
  el codigo, algo interesante es que el await me devuelve una promesa resuelta, es decir, primero se resuelve
  la promesa dentro del await y despue ya se puede usar los datos de ahi*/
  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({ isFetching: true })

    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'

    const res = await fetch(url + '&t=' + title)
    const movie = await res.json()

    this.setState({
      movie,
      isFetching: false
    })
  }

  render () {
    const { movie, isFetching } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Nombre de Pelicula'
          />
          <button>
            Buscar
          </button>
        </form>
        {isFetching && (
          <h2>Cargando...</h2>
        )}
        { movie.Title && !isFetching && (
          <div>
            <h1>{ movie.Title }</h1>
            <p>
              { movie.Plot }
            </p>
            <img
              src={ movie.Poster }
              alt='Poster'
              style={{
                width: '150px'
              }}  
            />
          </div>
        ) }
      </div>
    )
  }
}

export default App