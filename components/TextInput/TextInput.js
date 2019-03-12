import React, { Component } from 'react';
import "./TextInput.css"

class TextInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      width: props.width
    };
  }

  render(){
    return(
      <div>
        <input className="input" type="text" value={this.state.name} style={{width: this.state.width}}></input>
      </div>
    )
  }
}


export default TextInput;
