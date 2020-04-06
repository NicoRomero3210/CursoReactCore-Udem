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
  const [ num, setNum ] = useState(0)
  const [ emoji, setEmoji ] = useState('ðŸ¦')

  useEffect(() => {
    alert('useEffect ðŸŽ‡')
    /* Aca con ese array le digo con que variables de los hooks quiero que se active el useEffect
    En este caso le digo que se active con ambas vbles, si le doy un array vacio el useEffect se activa solo
    en el didMount, no se activa mas en el didUpdate, si no le doy ningun array es como que quiero activarlo
    con todas las vbles */
  }, [ emoji, num ])

  const addNum = () => setNum(num + 1)
  
  const toggleEmoji = () => {
    const nextEmoji = emoji === 'ðŸ¦' ? 'ðŸ™Š' : 'ðŸ¦'
    setEmoji(nextEmoji)
  }

  return (  
    <div>
      <Header />
      <button onClick={addNum}>
        ADD ( { num } )
      </button>
      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>
      <h1>
        { emoji }
      </h1>
    </div>
  )
}

export default App