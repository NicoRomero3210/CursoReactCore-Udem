import React,{Component} from 'react'

const styles = {

    background: 'yellow',
    height: '200px',
    padding:'1em',
    boxSizing:'border-box'
}



class App extends Component{

    state = {

        x:0,
        y:0
    
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

    render(){
        
        return(
            <div style = {styles} onMouseMove = {this.manejador} onClick = {this.manejador2}>

                {this.state.x} <br/>
                {this.state.y}

            </div>

        )

    }
}

export default App