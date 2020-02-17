import React,{Component} from 'react'

const Gato = (props) => (

    
    <div>
        <h1>
            Gato
        </h1>
        <pre>

            {JSON.stringify(props,null,4)}
            
        </pre>
    </div>

)

const otrosDatos = {

    sexo:'Masculino',
    dios: 'Zeus'

}

class App extends Component{

    state = {

        nombre: 'michifus',
        peleas: 320,
        raza: 'Gato'

    }

    render(){

        return(
            <div>

                <Gato nombre = 'Ricardo' año= '2005'

                    {...otrosDatos}
                    {...this.state}
                
                />

            </div>
        )
    }

}


export default App