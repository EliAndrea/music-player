import React, { Component } from 'react';

export class ButtonPlay extends Component{
    constructor(){
        super()
        this.state = {
            icon: "play"
        }
        this.changeIcon = this.changeIcon.bind(this)
    }
    changeIcon(){
        this.state.icon === "play" ? this.setState({icon: "pause-circle"}) : this.setState({icon: "play"})
    }
    
    render(){
        return(
            <div className="button play">
                <i className={"fas fa-" + this.state.icon} onClick={this.changeIcon}></i>
            </div>
            )
    }
}