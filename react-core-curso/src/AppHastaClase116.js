import React, { useState, useCallback } from 'react'

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
        Hook useCallback
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

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8)


const Button = React.memo(({ callback, children }) => {

  const styles = {
    padding: '1em',
    fontSize: '20px',
    background: getRandomColor()
  }

  return (
    <button style={styles} onClick={callback}>
      { children }
    </button>
  )
})

const App = () => {
  const [ a, setA ] = useState(0)
  const [ b, setB ] = useState(0)

  const incrementA = useCallback(() => {
    setA(a => a + 1)
  }, [])

  /* A diferencia de la leccion anterior aca vemos que si tenemos un elemento que usa un callback y que 
  depende de otro que se esta actualizando con su estado, vemos que el elemnto b no se puede actualizar
  ya que en el callback no se tiene en cuenta si el valor de a cambio o no, para decirle que cambie el
  valor de a, o use el valor de a actualizado tenemos que poner la vble a en el array de dependecias,
  es decir, en el segundo parametro de useCallback() */

  const incrementB = useCallback(() => {
    setB(b => b + a)
  }, [ a ])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <Button callback={incrementB}>
        Increment B
      </Button>
      <h1>
        a: { a } b: { b }
      </h1>
    </div>
  )
}

export default App