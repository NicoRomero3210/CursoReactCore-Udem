import React,{Component}from 'react'
import TarjetaFruta from './Componentes/TarjetaFruta' //Lo imorto asi porque cree un index.js en la carpeta
//TarjetaFruta y como hay un archivo que se llama TarjetaFruta.js y lo estoy exportando desde ese index, entonces
//me reconoce el archivo js y todos los modulos css que puse en esa carpeta, si no deberia importarlo como
//siempre: import from './Componentes/TarjetaFruta/TarjetaFruta', esto queda medio feito
/*
const App = () => {
   
    return(
        <div>
            <TarjetaFruta name='Sandia' precio = {2.0} />
            <TarjetaFruta name='Limon' precio = {8.0} />
        </div>
    )
}
*/

class ComponenteClick extends Component {

    state = {
        video:{
            titulo: 'La Concha de tu madre All Boys',
            likes: 0
        }

    }

    //ESTO TAMBIEN SE PODIA HACER PASANDOLE EL CUERPO DE LA FUNCION Y NO EL OBJETO ENTRE PARENTESIS
    //ESO SE HACE DE ESTAS FORMA, SI SE HACE DE LA OTRA FORMA(LA QUE ESTOY USANDO ACTUALMENTE), SE DEBE MANDAR
    //TODO EL OBJETO STATE ANTES PORQUE SI NO ME QUITA LAS PROPIEDADES QUE NO MENCIONO EN EL OBJETO QUE LE
    //ESTOY PASANDO. ESTO SIRVE PARA PODER HACER QUE EL EVENTO ACTUALICE EL ESTADO SIN ESPERAR A QUE OTROS
    //COMPONENTES TERMINEN DE ACTUALIZAR LOS ESTADOS(TIENE QUE VER CON LO SINCRONO Y LO ASINCRONO)

    /*
    addClick = () => {

        setState((state,props) => {

            return{

                clicks: state.clicks + 1

            }

        })

    }
    
    */

    addClick = ()=>{

        this.setState((state) => ({
            video:{
                ...state.video,
                likes: state.video.likes + 1
            }

        }))

    }

    render(){

        return(

            <div>

                <h1>
                    {this.state.video.titulo}
                </h1>
                <button onClick={this.addClick}>

                     Likes: {this.state.video.likes}

                </button>

            </div>

        )

    }
    

}

const App = () => {

    return(

        <ComponenteClick/>

    )

}
export default App
