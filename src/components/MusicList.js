import React, { Component } from 'react';

export class MusicList extends Component{
    constructor(props){
        super(props);
        this.selectSong = this.selectSong.bind(this);
    }

    unselectSong(arr){
        for(let i=0; i<arr.length; i++){
            arr[i].selected = "";
        }
    }
    selectSong(index){
        let songsList = this.props.songs;
        this.unselectSong(songsList);
        songsList[index].selected = "selected";
        this.props.update(songsList);
        this.props.play(songsList[index]);
    }

    render(){
        return(
            <div className="listContainer">
                <ul className="list">
                    {this.props.songs.map((song, index) => {
                        return( 
                        <li key={index} className={"song " + this.props.songs[index].selected} onClick={()=>this.selectSong(index)}>
                            {song.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{song.name}
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}