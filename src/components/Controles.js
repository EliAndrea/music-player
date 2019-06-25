import React, { Component } from 'react';
import {BotonPlay} from "./BotonPlay.js";

export class Controles extends Component{
    constructor(props){
        super(props);
    this.adelantarCancion = this.adelantarCancion.bind(this);
    this.retrocederCancion = this.retrocederCancion.bind(this);
    }
    adelantarCancion(){
        this.props.adelantar(this.props.lista);
    }
    retrocederCancion(){
        this.props.retroceder(this.props.lista);
    }
    render(){
        return(
            <div className="barraControles fixed-bottom row justify-content-md-center">
                <div className="col col-lg-1">
                    <div className="boton retroceder" onClick={this.retrocederCancion}><i className="fas fa-caret-square-left"></i></div>
                </div>
                <div className="col col-lg-1">
                    <BotonPlay />
                </div>
                <div className="col col-lg-1">
                    <div className="boton avanzar" onClick={this.adelantarCancion}><i className="fas fa-caret-square-right"></i></div>
                </div>
            </div>
        );
    }
}
