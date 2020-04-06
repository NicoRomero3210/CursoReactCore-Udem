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
        React.memo
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

// React.memo() HOC
const Counter = React.memo(({ count }) => {
  console.log('%cRender <Counter />', 'color: blue')

  return (
    <h1>
      { count }
    </h1>
  )
})

const Title = React.memo(({ text }) => {
  console.log('%cRender <Title />', 'color: orangered')

  return (
    <h1>
      { text }
    </h1>
  )
})

/* Aca lo que su busca mostrar es como podemos diferenciar los componentes que se deberan renderizar juntos y
los que no se deben renderizar juntos, en este caso los que se deben renderizar juntos son el Title y
el TilteNested, como ambos reciben la misma propiedad que es title entonces se puede usar esta combinacion
y de esa forma evitamos que cuando count se renderiza se renderice tambien TitleNested, fijarse
la segunda funcion que le pasamos, ahi ocurre la magia */

const TitleNested = React.memo(
  ({ info }) => {
    console.log('%cRender <TitleNested />', 'color: purple')

    return (
      <h1>
        { info.text }
      </h1>
    )
  },
  (prevProps, nextProps) => {
    // Si retorna true no se renderiza
    // Si renorna false esta si se renderiza
    // console.log(prevProps, nextProps)
    return prevProps.info.text === nextProps.info.text
  }
)

const App = () => {
  const [ title, setTitle ] = useState('')
  const [ count, setCount ] = useState(0)
  
  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
      />
      <button onClick={handleAdd}>
        Add
      </button>
      <Counter count={count} />
      <Title text={title} />
      <TitleNested
        info={{
          text: title
        }}
      />
    </div>
  )
}

export default App