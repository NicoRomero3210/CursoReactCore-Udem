import React,{Component} from 'react'


class ElementoDePersistencia extends Component {

    state = {

        color: 'blue'

    }

    manejadorCambio = (e) => {

        //Para que no salte el error por el tema de que la funcion arrow que le pasamos es asyncrona usamos el metodo
        //persist o sino una constante que almacene el color
        const color = e.target.value
        //e.persist()
        this.setState((state) => ({
            //Asi es con el pesrsist()
            //color: e.target.value
            //Asi usando la const color
            color: color

        }))

    }

    render(){

        return(

            <div>

                <input onChange = {this.manejadorCambio}></input>
                <h1 style={
                    {
                    color: this.state.color
                    }

                }
                >
                    {this.state.color}
                </h1>
            </div>

        )

    }

}

class App extends Component {

    render(){
    return(
        <div>

            <ElementoDePersistencia/>

        </div>
    )
    }



}

export default App