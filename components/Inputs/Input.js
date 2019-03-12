import React, {Component} from "react";
import "./Input.css";

class Input extends Component{
  constructor(props) {
    super(props)
    this.state={
      value:""
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <input className="Inputs" type="text" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
    )
  }
}

export default Input;
