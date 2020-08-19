import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h1>Home</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const Playlist = () => (
  <h1>Playlist</h1>
)

/* Aca nos muestra como usar el componente switch dentro del Browser, esto hace que se rendeerice solo el primer componente que matchee con la url, es decir, si hay dos componentes
que poseen la misma ruta, solo se renderiza el primero que pongo en la lista del switch, no el otro. */

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/videos' render={Videos} />
        <Route path='/videos' render={Playlist} />
      </Switch>
    </BrowserRouter>
  )
}

export default App