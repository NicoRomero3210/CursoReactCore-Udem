import React, { useState } from 'react'

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
        Hook useState
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

  /*Aca hay un ejemplo de como usar el hook con un objeto como era el state, pero como puse en clases 
  anteriores, se recomienda usar un hook para ca propiedadm es decir, un hook para clicks y otro para
  title */

  const [ state, setState ] = useState({
    clicks: 0,
    title: ''
  })

  const merge = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const addClicks = () => {
    merge({
      clicks: state.clicks + 1
    })
  }

  const handleInput = (e) => {
    const title = e.target.value

    merge({
      title
    })
  }

  return (
    <div>
      <Header />
      <input
        type="text"
        value={state.title}
        onChange={handleInput}  
      />
      <button onClick={addClicks}>
        Clicks ({ state.clicks })
      </button>
      <h3>{ state.title }</h3>
    </div>
  )
}

export default App