import React,{Component} from 'react'

//PARA PODER INYECTAR CODIGO HTML CON JS EN REACT SE NECESITA DE LA PROP dangerouslySetInnerHTML, LA CUAL
//RECIBE UN OBJETO CON EL ATRIBUTO __html, EN DONDE SE PONE EL CODIGO A INYECTAR, ESTO ES ASI PORQUE REACT
//DE UNA NO NOS VA A DEJAR INYECTAR DICHO CODIGO HTML, YA QUE REPRESENTA UNA VULNERABILIDAD MUY GRANDE

class App extends Component{

    state = {

        marcado: `<h1>Chupamela Hasta Que se me Gaste</h1> 
                    <br/>
                    <hr/>
                    
                    <a href='https://google.com.ar'> Algun Link </a>`

    }

    render(){

        return(

            //<div>{this.state.marcado}</div> ASI NO SIRVE
            <div dangerouslySetInnerHTML = {{__html: this.state.marcado}}></div>


        )

    }

}


export default App