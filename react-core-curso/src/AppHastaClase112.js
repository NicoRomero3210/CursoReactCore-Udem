import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

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
      useImperativeHandle
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

// React.forwardRef()
// Ejecutar metodos de instancia

const FancyInput = forwardRef((props, ref) => {
  const [ text, setText ] = useState('***')
  const entrada = useRef()

/* Basicamente con esto nosotros podemos usar esas cosas que estan dentro de useImperativehandle, sin necesidad
de pasarlas por props, solo usando el forwardRef */

  useImperativeHandle(ref, () => ({
    dispatchAlert: () => {
      alert('Hola')
    },

    setParragraph: (message) => {
      setText(message)
    },

    //ESTO NO ES MUY RECOMENDABLE, PERO SE PUEDE AHCER
    focusInput: () => {
      entrada.current.focus()
    }
  }))

  return (
    <div>
      <p>{ text }</p>
      <input type='text' ref={entrada} />
    </div>
  )
})

const App = () => {
  const fancyInput = useRef()

  const handleClick = () => {
    fancyInput.current.focusInput()
  }

  return (
    <div>
      <Header />
      <FancyInput ref={fancyInput} />
      <button onClick={handleClick}>
        Dispatch
      </button>
    </div>
  )
}

export default App