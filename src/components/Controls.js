import React, { Component } from 'react';

export class Controls extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="controls fixed-bottom row justify-content-md-center">
                <div className="col col-lg-1">
                    <div className="button previous" onClick={()=>{this.props.backward(this.props.list)}}>
                        <i className="fas fa-caret-square-left"></i>
                    </div>
                </div>
                <div className="col col-lg-1">
                    <div className="button play">
                        <i className={"fas fa-" + this.props.btnPlay} onClick={this.props.play}></i>
                    </div>
                </div>
                <div className="col col-lg-1">
                    <div className="button next" onClick={()=>{this.props.forward(this.props.list)}}>
                        <i className="fas fa-caret-square-right"></i>
                    </div>
                </div>
            </div>
        );
    }
}
