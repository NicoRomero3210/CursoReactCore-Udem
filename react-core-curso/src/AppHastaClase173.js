import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

/* Aca basicamente lo que ahce es usar navegacion imperativa, explicando los distintos metodos que tiene la propiedad history, como push, que empuja hacia una nueva direccion,
replace, que reemplaza en el historial la direccion actual por otra y go, que te dice cuantas posiciones en el array del historial te vas a mover, acordarse de que el historial
se presenta como un array de componentes visitados hasta el actual, go lo que hace es moverse desde el actual tantas posicione le indiquemos, si el numero es negativo vuelve para
atras */

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='active'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='active'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

const Ninja = () => (
  <h1>Ninja</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

/*Aca es donde sucede la magia del history*/

const NavegacionImperativa = ({ history }) => {
  console.log(history)

  return (
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>
      <button onClick={history.goForward}>
        Adelante
      </button>
      <button onClick={() => {
        history.go(-2)
      }}>
        Go 2
      </button>
      <button onClick={() => {
        history.replace('/ninja')
      }}>
        GO NINJA
      </button>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route render={NavegacionImperativa} />
      <Route path='/' exact render={Home} />
      <Route path='/ninja' render={Ninja} />
      <Route path='/videos' render={Videos} />
    </BrowserRouter>
  )
}

export default App