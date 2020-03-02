import React,{Component,Fragment} from 'react'

//ACA LO QUE HACEMOS ES USAR LOS FRAGMENTS CON REACT, ESTO SERIA USAR ESAS ETIQUETAS PARA EVITAR RENDERIZAR
//COMPONENTES CON ARRAYS, ASI REACT LO HACE DE FORMA NATURA(ESTO ES UNA OPCION PARA EVITAR USAR LOS ARRAYS,
//PERO  NO SIEMPTRE ES LA MAS OPTIMA)

const ListaComputacion = () => {

    return(

        <Fragment>

            <li>Memoria</li>
            <li>CPU</li>
            <li>ALU</li>

        </Fragment>

    )

}


const ListaRopa = () => {

    return(

        <Fragment>

            <li>Calzones</li>
            <li>Medias</li>
            <li>Remeras</li>

        </Fragment>

    )

}

class App extends Component {

    render(){

        return(

            <div>

                <ListaComputacion/>
                <ListaRopa/>

            </div>

        )

    }


}

export default App