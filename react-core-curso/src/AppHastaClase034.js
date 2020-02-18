import React,{Component} from 'react'

const styles = {

    background: 'yellow',
    height: '200px',
    padding:'1em',
    boxSizing:'border-box'
}

const styles2 = {



}

class App extends Component{

    state = {

        x:0,
        y:0,
        texto:'',
        evento:''

    
    }

    manejador = (event) => {

        this.setState({

            x: event.clientX,
            y: event.clientY

        })    
    
    }

    manejador2 = () => {

        alert(`Componente x: ${this.state.x}\nComponente y: ${this.state.y}`)

    }

    manejadorInput = (event) =>{

        console.log(event.target.value)
        console.log(event.nativeEvent)
        this.setState({
            ...this.state,
            texto: event.target.value,
            evento: event.type
        })
        

    }

    render(){
        
        return(
            <div>
            <div style = {styles} onMouseMove = {this.manejador} onClick = {this.manejador2}>

                {this.state.x} <br/>
                {this.state.y}
            </div>

            
            <div>
                <input type="text" onChange = {this.manejadorInput} onCopy={this.manejadorInput} onPaste={this.manejadorInput}></input>
                <h1>{this.state.texto}</h1>
                <h1>{this.state.evento}</h1>

            </div>

            </div>

        )

    }
}

export default App