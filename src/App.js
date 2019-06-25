import React, { Component } from 'react';
import './App.css';
import {ListaMusica} from "./components/ListaMusica.js";
import {Controles} from "./components/Controles.js";

let canciones = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      lista: canciones
    };
    this.asignarSeleccion = this.asignarSeleccion.bind(this);
    this.adelantarCancion = this.adelantarCancion.bind(this);
    this.retrocederCancion = this.retrocederCancion.bind(this);
  }
  
  componentDidMount(){
    fetch('http://assets.breatheco.de/apis/sound/fx')
      .then(function(response){
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((responseAsJson) =>{
        canciones = responseAsJson;
        console.log(canciones);
        this.setState({lista: canciones});
      })
      .catch(function(error) {
        alert(error);
      });
  }

  adelantarCancion(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i].estado === "seleccionada" && i < arr.length - 1){
        arr[i].estado = "";
        arr[i +1].estado = "seleccionada";
        break;
      }
      else if(arr[i].estado === "seleccionada" && i === arr.length-1){
        arr[i].estado = "";
        arr[0].estado = "seleccionada";
        break;
      }
    }
    this.setState({lista: arr});
  }
  retrocederCancion(arr){
    for(let i=arr.length-1; i >= 0; i--){
      if(arr[i].estado === "seleccionada" && i > 0){
        arr[i].estado = "";
        arr[i - 1].estado = "seleccionada";
        break;
      }
      else if(arr[i].estado === "seleccionada" && i === 0){
        arr[i].estado = "";
        arr[arr.length-1].estado = "seleccionada";
        break;
      }
    }
    this.setState({lista: arr});
  }
  
  asignarSeleccion(arr){
    this.setState({lista: arr});
  }
  render() {
    return (
      <div className="App">
        <ListaMusica canciones={canciones} asignar={this.asignarSeleccion}/>
        <Controles adelantar={this.adelantarCancion} retroceder={this.retrocederCancion} lista={this.state.lista}/>
      </div>
    );
  }
}

export default App;
