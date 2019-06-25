import React, { Component } from 'react';

export class ListaMusica extends Component{
    constructor(props){
        super(props);
        this.seleccionarCancion = this.seleccionarCancion.bind(this);
    }

    deseleccionarCancion(arr){
        for(let i=0; i<arr.length; i++){
            arr[i].estado = "";
        }
    }
    seleccionarCancion(index){
        let listaCanciones = this.props.canciones;
        this.deseleccionarCancion(listaCanciones);
        listaCanciones[index].estado = "seleccionada";
        this.props.asignar(listaCanciones);
    }

    render(){
        return(
            <div className="contenedorLista">
                <ul className="lista">
                    {this.props.canciones.map((cancion, index) => {
                        return( 
                        <li key={index} className={"cancion " + this.props.canciones[index].estado} onClick={()=>this.seleccionarCancion(index)}>
                            {cancion.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cancion.name}
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}