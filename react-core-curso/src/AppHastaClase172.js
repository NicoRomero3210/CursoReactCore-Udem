import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='active'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='active'>Login</NavLink>
  </nav>
)

const Home = () => (
  <h1>Home</h1>
)

/* Aca con un pequeño ejemplo de autenticacion nos muestra como seria usar el componente redirect, tanto dentro de un componente funcional como dentro del browser componente
ademas de esto nos muestra como hacer rutas conrtas, es decir, si escribo /p que me dirija directamente al perfil como hace en el ejemplo de mas abajo, elr edirect del componente
lo que hace es mandarme al login directamente si es que no estoy autenticado */

const Login = ({ location }) => {

  if (location.state) {
    return <h2>{ location.state.message }</h2>
  }

  return (
    <h1>Login</h1>
  )
}

const isAuth = true

const Perfil = () => {
  return isAuth
    ? <h2>Bienvenido a tu perfil</h2>
    : <Redirect to={{
        pathname: '/login',
        state: {
          message: 'Debes de hacer login para acceder a tu perfil'
        }
      }} />
}

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/login' render={Login} />
      <Route path='/perfil' render={Perfil} />
      <Redirect from='/p' to='/perfil' />
    </BrowserRouter>
  )
}

export default App