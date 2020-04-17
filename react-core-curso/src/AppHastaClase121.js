import React, { useState, useEffect } from 'react'

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
        Hooks Personalizados
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

/* Usando el initialState le indico que puede ser un array o bien un objeto, la primera vez lo inicializamos
como un array vacio (como el de la clase anterior), sin embargo este puede ir cambiando a medida que se realicen
las peticiones http */

const useFetch = (url, initialState = []) => {
  const [ data, setData ] = useState(initialState)
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    setFetching(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data) //Aca se setea lo que se le mande, sea un array o sea un objeto
        setFetching(false)
      })
  }, [ url ])

  return [
    data,
    isFetching
  ]

}

const App = () => {
  const [ clicks, setClicks ] = useState(1)
  /* Aca lo que hago en la peticion es indicarle que de esta manera voy a pedir datos especificos que me van a
  llegar en forma de objeto, y no un array de objetos */
  const [ user, isLoading ] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks, {}) 

  const add = () => setClicks(clicks + 1)

  return (
    <div>
      <Header />
      { isLoading && <h1>Cargando...</h1> }
      <h1>{ user.name }</h1>
      <p>{ user.phone }</p>
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App