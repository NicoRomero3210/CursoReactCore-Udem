import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Home</h1>
)

/* Aca nos muestra un par de opciones para usar en las rutas, con exact le pedimos que sea exactamente la ruta
que le pasamos, con sensitive hacemos que la url sea sensible a Mayusculas y minusculas, otra que mostro fue
Strict, el cual te pide todos los caracteres presentes, inclusive la barra final, que en otros casos puede ser 
omitida */

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/Hola' sensitive component={Hola} />
      <Route path='/productos' component={Productos} />
    </BrowserRouter>
  )
}

export default App