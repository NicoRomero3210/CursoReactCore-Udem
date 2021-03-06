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
        Hooks Personalizados
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

/* Este es nuestro Hook personalizado, con el lo que hacemos es cargar logica reutilizable por otros componentes
, en este caso nosotros estamos viendo el tamaño y ancho de nuestras ventanitas de la web.
  Hay que fijarse bien que al final pasamos los datos que estamos manipulando para que este sea accesible
  para los otros componentes */

const useSizes = () => {
  const [ width, setWith ] = useState(window.innerWidth)
  const [ height, setHeight ] = useState(window.innerHeight)

  // Agregar listener
  const handleResize = () => {
    setWith(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return {
    width,
    height
  }
}

const App = () => {
  const { height, width } = useSizes()

  return (
    <div>
      <Header />
      <h1>
        Width: { width }px  Height: { height }px
      </h1>
    </div>
  )
}

export default App