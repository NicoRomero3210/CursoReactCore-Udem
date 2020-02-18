import React,{Component} from 'react'

//ACA VIO COMO RENDERIZAR COMPONENTES CON CONDICIONALES

const Saludo = (props) => {

    if(props.saluda){
    return(

        /*<div>

            {

                props.saluda ? (<h1>Hola mi Hermanazo</h1>)
                : (<h1>No te saludo ni en bolas mi Hermanazo</h1>)                

            }

        </div>*/       

        

            <h1>Hola mi Hermanazo</h1>

        

    )
        }

    else {

        return(
        <h1>No te saludo ni en bolas mi Hermanazo</h1>    
        )

    }

}

class App extends Component {

    render(){

        return(

            <Saludo saluda/>

        )

    }

}

export default App