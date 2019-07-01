import React, { Component } from 'react';
import './App.css';
import {MusicList} from "./components/MusicList.js";
import {Controls} from "./components/Controls.js";

class App extends Component {
  constructor(){
    super();
    this.audioRef= React.createRef();
    this.state = {
      list: [],
      song: "",
      iconBtn: "play"
    };
    this.updateList = this.updateList.bind(this);
    this.forwardSong = this.forwardSong.bind(this);
    this.backwardSong = this.backwardSong.bind(this);
    this.playSelectedSong = this.playSelectedSong.bind(this);
    this.clickbtnPlay = this.clickbtnPlay.bind(this);
  }
  
  componentDidMount(){
    fetch('https://assets.breatheco.de/apis/sound/songs')
      .then((response) => {
        return response.json();
      })
      .then((responseAsJson) =>{
        let songs = responseAsJson;
        songs.forEach((song)=>{song.url = "https://assets.breatheco.de/apis/sound/" + song.url})
        this.setState({list: songs});
      })
      .catch((error) => {
        alert(error);
      });
  }

  playSelectedSong(song){
    this.setState({ song: song, iconBtn: "pause-circle" }, () => {
      this.playSong();
    });
    
  }
  playSong = () => {
    this.audioRef.current.play();
  }
  pauseSong = () => {
    this.audioRef.current.pause();
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
  clickbtnPlay(){
    if(this.state.iconBtn === "play"){
      this.setState({iconBtn: "pause-circle"}) 
      this.playSong();
   }
   else{
      this.setState({iconBtn: "play"})
      this.pauseSong()
   }
  }
  
  updateList(arr){
    this.setState({list: arr});
  }
  render() {
    return (
      <div className="App">
        <audio ref={this.audioRef} src={this.state.song.url} controls>
        </audio>
        <MusicList songs={this.state.list} update={this.updateList} play={this.playSelectedSong}/>
        <Controls forward={this.forwardSong} backward={this.backwardSong} 
          list={this.state.list} btnPlay={this.state.iconBtn} play={this.clickbtnPlay} pause={this.pauseSong}/>
      </div>
    );
  }
}

export default App;