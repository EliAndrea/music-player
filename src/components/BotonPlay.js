import React, { Component } from 'react';

export class BotonPlay extends Component{
    constructor(){
        super()
        this.state = {
            icono: "play"
        }
        this.cambioIcono = this.cambioIcono.bind(this)
    }
    cambioIcono(){
        this.state.icono === "play" ? this.setState({icono: "pause-circle"}) : this.setState({icono: "play"})
    }
    
    render(){
        return(
            <div className="boton play">
                <i className={"fas fa-" + this.state.icono} onClick={this.cambioIcono}></i>
            </div>
            )
    }
}