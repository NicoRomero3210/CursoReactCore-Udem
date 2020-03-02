import React,{Component} from 'react'

//ACA VEO COMO UTILZAR LAS CHILDREN PROPS, QUE VENDRIA A SER TODO LO QUE SE PONGA ENTRE LAS ETIQUETAS DEL
//COMPONENTE QUE CREE, EN ESTE CASO TITLE, PARA ESO SE NECESITA USAR ETIQUETA DE APERTURA Y CIERRE DEL COMPONENTE
//PARA MIRAR COMO SE RENDIRIZAN PRIMERO LAS PROPS CHILDRENS(YA QUE LO PUSIMOS PRIMERO) Y LUEGO EL H2 QUE SE 
//LE PASA POR LA PROP TEXT
const Title = (props) => {

    const {uiColor} = props
        
    const styles = {

        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'

    }

    console.log(props.children)

    return(

        <div>
        <h1 style = {styles}>{props.children}</h1>
        <div>{props.text}</div>
        </div>

    )

}
/*
class App extends Component{

    state = {

        uiColor: 'purple',
        text:'Anda a la mierda'

    }

    render(){

        return(

            <div>

                <Title uiColor = {this.state.uiColor} text={<h2>Pingo</h2>}>

                    Super <em>Nijna</em>: {this.state.text}

                </Title>

            </div>

        )

    }

} */

class App extends Component{

    //Aca aplico la destructuracion
    state = {

        uiColor: 'purple',
        text:'Anda a la mierda'

    }

    //ESTO ES DESTRUCTURACION

   

    render(){

        const {uiColor} = this.state

        return(

            <div>

                <Title uiColor = {uiColor} text={<h2>Pingo</h2>}>

                    Super <em>Nijna</em>: {this.state.text}

                </Title>

            </div>

        )

    }


}

export default App







