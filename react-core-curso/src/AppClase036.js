import React,{Component} from 'react'

//ACA LO QUE HICE FUE PASAR DATOS DE UN HIJO A UN PADRE, PARA ESO USO LAS PROPS DEL HIJO,
//MEDIANTE UNA FUNCION CON PARAMETROS, HAGO QUE ME RENDERICE UN BOTON DESPUES CUANDO SE LE DA CLICK
//ACTIVA UNA FUNCION QUE ACTIVA UNA FUNCION EN LAS PROPS DEL HIJO, EN EL PADRE SE INVOCA ESO JUNTO
//CON LA ETIQUETA DE HIJO Y ESO LE PASA EL PARAMETRO QUE NECESITA EL MANEJADOR DEL PADRE PARA
//ACTUALIZAR SU ESTADO, ES DECIR, CUANDO SE EJECUTE LA FUNCION DE LA PROPS DEL HIJO ENTONCES SE ACTIVA
//EL MANEJADOR DEL PADRE Y TOMA LOS PARAMETROS DE LA FUNCION DE LA PROPS DEL HIJO

class Hijo extends Component{

    saludarPadre = (algo)=>{

        this.props.onSaludar(algo)

    }

    render(){
    return(

        <div>

            <button onClick = {() => {this.saludarPadre('Ricard')}}></button>
            <h2>Hijo</h2>

        </div>

    )
    }

}


class App extends Component{

    state={

        name:''

    }

    manejadorPadre = (name) => {

        this.setState({

            name

        })

    }

    render(){

        return(

            <div>

                <Hijo onSaludar = {this.manejadorPadre}/>
                <h1>{this.state.name}</h1>

            </div>

        )

    }

}

export default App