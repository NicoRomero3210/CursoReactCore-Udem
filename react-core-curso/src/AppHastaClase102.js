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
  const [ mouseX, setMouseX ] = useState(0)
  const [ mouseY, setMouseY ] = useState(0)

  const handleMove = (e) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  /* Con el useEffect esta activando el escuchador de eventos mousemove, esto lo logra con didUpdate y
  el didMount, y despues limpia ese escuchador con el willUnmout para mejorar temas de rendimiento de la
  app */
  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  })

  return (  
    <div>
      <Header />
      <h1>
        X: { mouseX } Y: { mouseY }
      </h1>
    </div>
  )
}

export default App