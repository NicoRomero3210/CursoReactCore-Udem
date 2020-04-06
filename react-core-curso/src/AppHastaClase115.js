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

  /* Con esto nosotros nos aseguramos que cuando le damos click al boton solo actualice el valor de count
  y no cambie mas el color, ya que lo unico que queremos es que cambie el color cuando el componente se 
  monta en el DOM, no cuando actualiza su estado o sus props */

  const incrementA = useCallback(() => {
    setA(a => a + 1)
  }, [])

  return (
    <div>
      <Header />
      <Button callback={incrementA}>
        Increment A
      </Button>
      <h1>
        a: { a }
      </h1>
    </div>
  )
}

export default App