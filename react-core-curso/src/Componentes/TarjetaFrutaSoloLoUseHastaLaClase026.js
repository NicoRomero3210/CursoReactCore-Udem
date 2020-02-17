import React from 'react'
import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css' //Esto es para usar modulos, no se configura nada cuando creamos con el comando ract creat app
//se lo usa como un ojeto normal accediendo a el por el metodo punto o por el metodo corchete

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
    //PARA QUE FINCIONE ESTO DEBERIA SACAR EL STATE DEL CONSTRUCTOR
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
        const hasItems = this.state.cantidad > 0
        //const TarjetaFrutaActiva = hasItems ? 'TarjetaFruta-activa' : 'TarjetaFruta'
        //const clase = `TarjetaFruta ${hasItems ? 'TarjetaFruta-activa' : ''}`
        const clase = styles.TarjetaFruta + ` ${hasItems ? styles['TarjetaFruta-activa'] : ''}`

        /*
        const styles = {

            border: '1px solid black',
            marginBottom: ' 1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItems ? 'linear-gradient(45deg, black,#4a02f7 )': '#FFF',
            color: hasItems ? '#FFF' : '#000',
            transition: 'all 250ms ease-out'

        }*/

        return(

    /*<div style={styles}> Asi se usa si se quiere vincular con el objeto styles de arriba*/
    //<div className = 'TarjetaFruta'> Si se invoca cuando solamente es importado en la aprte de arriba
    //<div className = {TarjetaFrutaActiva}>Esta es otra forma para invocar dependiendo qeu estilos se deberian activar
    //<div className = {clase}>
    //<div className = {styles.TarjetaFruta}> Este se usa cuando quiero usar un solo elemnto del doc css, se accede asi ya que es un objeto js cuando se hace la magia de webpack
    <div className = {clase}>


        <h3>
            Titulo
        </h3>
        <hr/>
        <p>Descripcion... <br/>
            Nombre: {this.props.name} <br/>
            Precio: {this.props.precio} <br/>
            Cantidad: {this.state.cantidad}
        </p>
        <p>

            Total: {this.state.cantidad * this.props.precio}

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

export default TarjetaFruta