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

/* Aca basicamente nos muestra las diferencias entre render component y usar Route con un componente hijo,
los dos primero son casi iguales, solo que se recomienda que se use render cuando le pasamos explicitamente
un componente funcional con arrow functions ejemplo: render = {() => (<div>Hola<div/>)}, ahora, la cosa
mas intrincada esta en el tercer caso, en este tipo de Rutas podemos recibir las props de las rutas como 
parametro y con esto podemos hacer muchas cosas, lo que si siempre hay que tener en cuenta que este componente
se va a renderizar con todas las rutas, ya que es como que esta incrustado en app, para evitar eso se pueden usar
ciertas props como la que usa en este ejemplo que se llama match, en donde le decis que si no es la url que
esta en path, entonces te retorne null o en este caso esa etiqueta div, caso contrario, si hay coincidencia, 
que te retorne el componente deseado que en este caso seria productos*/
const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/hola' render={Hola} />
      <Route path='/productos'>
        {({ match }) => {
          if (!match) return (
            <div>
              *** Wops no coincide con /productos
            </div>
          )
          return (
            <Productos />
          )
        }}
      </Route>
    </BrowserRouter>
  )
}

export default App