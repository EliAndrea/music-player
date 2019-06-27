import React, { Component } from 'react';
import './App.css';
import {MusicList} from "./components/MusicList.js";
import {Controls} from "./components/Controls.js";

class App extends Component {
  constructor(){
    super();
    this.song = React.createRef();
    this.state = {
      list: [],
      song: "",
    };
    this.updateSongs = this.updateSongs.bind(this);
    this.forwardSong = this.forwardSong.bind(this);
    this.backwardSong = this.backwardSong.bind(this);
  }
  
  componentDidMount(){
    fetch('https://assets.breatheco.de/apis/sound/songs')
      .then((response) => {
        return response.json();
      })
      .then((responseAsJson) =>{
        let songs = responseAsJson;
        this.setState({list: songs});
      })
      .catch((error) => {
        alert(error);
      });
  }

  forwardSong(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i].selected === "selected" && i < arr.length - 1){
        arr[i].selected = "";
        arr[i +1].selected = "selected";
        break;
      }
      else if(arr[i].selected === "selected" && i === arr.length-1){
        arr[i].selected = "";
        arr[0].selected = "selected";
        break;
      }
    }
    this.setState({list: arr});
  }
  backwardSong(arr){
    for(let i=arr.length-1; i >= 0; i--){
      if(arr[i].selected === "selected" && i > 0){
        arr[i].selected = "";
        arr[i - 1].selected = "selected";
        break;
      }
      else if(arr[i].selected === "selected" && i === 0){
        arr[i].selected = "";
        arr[arr.length-1].selected = "selected";
        break;
      }
    }
    this.setState({list: arr});
  }
  
  updateSongs(arr){
    this.setState({list: arr});
  }
  render() {
    return (
      <div className="App">
        <audio></audio>
        <MusicList songs={this.state.list} update={this.updateSongs}/>
        <Controls forward={this.forwardSong} backward={this.backwardSong} list={this.state.list}/>
      </div>
    );
  }
}

export default App;