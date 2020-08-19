import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

/* Aca lo que hicimos fue implementar el componente Link, el cual reemplaza a la etiqueta a en los navs,
 con esto nosotros podemos navegar sin necesidad de que el browser recargue la pagina, cosa que con la etiqueta a
 si hacia, ademas, podemos pasarle mucha informacion a traves de un objeto, como ser el pathname, search, etc*/

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = (props) => {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

/* Aca esta la implementacion del Link */

const Navegation = () => (
  <nav style={navStyles}>
    <Link to={{
      pathname: '/',
      search: '?ordenar=nombre',
      hash: '#hash-otro',
      state: {
        name: 'Ninja PRO',
        age: 25
      }
    }}>Home </Link>
    <Link to='/hola'>Hola </Link>
    <Link to='/productos'>Productos </Link>
  </nav>
)
/* Aca se agrega el componente que usa a Link en el Router para que se pueda navegar */
const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/hola' render={Hola} />
      <Route path='/productos' render={Productos}/>
    </BrowserRouter>
  )
}

export default App