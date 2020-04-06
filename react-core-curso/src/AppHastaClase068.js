import React, { Component } from 'react'

class App extends Component {
  state = {
    movie: {}
  }

  /*Similar a la clase anterior solo que aca no se usa un metodo del ciclo de vida del componente,
  Solamente se hace la peticion y listo*/

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5c24385e'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => this.setState({ movie }))
  }

  render () {
    const { movie } = this.state
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
      </div>
    )
  }
}

export default App