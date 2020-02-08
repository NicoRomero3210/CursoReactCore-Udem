import React from 'react'
import ReactDOM from 'react-dom'
/*
//const nombre = "Hola Loco"

//ESTA ES OTRA FORMA DE CREAR ELEMENTOS HTML
//const App = React.createElement("h1",null,"Hola React")
//const App2 = React.createElement("h1",null,"App",***,"Hola")

const persona = {

    nombre: 'Lobo',
    apellido: 'De Mar',
    edad: 25

}

function mostrarDatos(persona){

    return `Hola soy ${persona.nombre} ${persona.apellido}, y tengo ${persona.edad} años`

}

const App = <h1>{mostrarDatos(persona)}</h1>

*/

/*
const TarjetaFruta = (props) => {
    console.log(props)
    return(
    <div>
        <h3>
            Titulo
        </h3>
        <hr/>
        <p>Descripcion... <br/>
            Nombre: {props.name} <br/>
            Precio: {props.precio}
        </p>
    </div>
    )
        
}
*/

class TarjetaFruta extends React.Component{

    constructor(){

        super()   

        this.state = {
            
            cantidad: 0

        }

        const METHODS = ['quitarItem','limpiarItems']

        METHODS.forEach((method) => {

            this[method] = this[method].bind(this)

        })

    }

    //SI HAGO ASI CON FUNCIONES DE FLECHAS EL THIS NO SE NECESITA ENLAZAR CON LA FUNCION YA QUE ESTO 
    //LO HACEN POR NATURALEZA LAS ARROW FUNCTION, IGUAL, ESOT SOLO FUNCIONA BIEN CUANDO HAGO LO DE CREATE-REACT-APP
    //SINO, DEBERIA CONFIGURAR BABEL Y WEBPACK Y TODA LA COSA PARA QUE FUNQUE BIEN
    agregarItem = ()=>{

        this.setState({cantidad: this.state.cantidad + 1})


    }
    
    quitarItem(){

        this.setState({cantidad: this.state.cantidad - 1})


    }

    limpiarItems(){

        this.setState({cantidad: 0})


    }

    render(){

        return(

    <div>
        <h3>
            Titulo
        </h3>
        <hr/>
        <p>Descripcion... <br/>
            Nombre: {this.props.name} <br/>
            Precio: {this.state.cantidad} <br/>
        </p>
        <button onClick = {this.agregarItem}>
        +
        </button>
        <button onClick = {this.quitarItem}>
        -
        </button>
        <button onClick = {this.limpiarItems}>Limpiar Items</button>
    </div>

        )

        }

}


const App = () => {
   
    return(
        <div>
            <TarjetaFruta name='Sandia' precio = {2.0} />
            <TarjetaFruta name='Limon' precio = {8.0} />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))









