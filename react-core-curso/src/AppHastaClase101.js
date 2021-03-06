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
        Hook useEffect
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

const App = () => {
  const [ clicks, setClicks ] = useState(0)

  /*Con esto podemos simular el efecto de las tres etapas fundamentales del ciclo de vida de un componente
  de React, lo feo que veo yo es que el willUnmount se ejecuta cada vez que se usa el DidUpdate :/ */
  useEffect(() => {
    // componentDidMount
    // componentDidUpdate
    console.log('Dentro de useEffect', clicks)
    console.log('%c------------------------', 'color: green')
    
    return () => {
      // componentWillUnmount
      console.log('Return de useEffect', clicks)
    }
  })

  const add = () => setClicks(clicks + 1)

  return (  
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
    </div>
  )
}

export default App