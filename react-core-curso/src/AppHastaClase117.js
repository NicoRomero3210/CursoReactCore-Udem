import React, { useState, useMemo } from 'react'

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
        Hook useMemo
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

const SuperList = ({ list, log }) => {
  console.log('%cRender <SuperList /> ' + log, 'color: green')
  
  return (
    <ul>
      {list.map(item => (
        <li key={ item }>
          { item }
        </li>
      ))}
    </ul>
  )
}


const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const add = () => {
    setClicks(clicks + 1)
  }

  /* Este ya no es el memo que usamos antes, este es el Hook posta, esto lo que hace es cachear en memoria
  algo, sea un componente, un array, cualquier cosa, y esto no va a cambiar a pesar de que otros elementos
  o comoponentes cambien, se puede lograr que cambie si lo ponemos dentro del array de dependencias, aunquqe
  esto ya no tendria mucha sentido-
  COMO DIJO EN LAS DOS CLASES ANTERIORES, ESTAS OPTIMIZACIONES DE RENDIMIENTO
  SOLO SE DEBERIAN USAR EN CASO DE QUE NUESTRA APLICACION MUESTRE UNA REAL CAIDA DE RENDIMIENTO, SINO
  ES AGREGAR COMPLEJIDAD SIN SENTIDO */

  const memoList = useMemo(() => {
    return (
      <SuperList
        list={[ 1, 2, 11, 55, 88 ]}
        log='Memorizado'
      />
    )
  }, [])

  return (
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>

      <SuperList
        list={[ 'orange', 'pink', 'purple', 'yellow']}
        log='Normal'
      />

      { memoList }
    </div>
  )
}

export default App