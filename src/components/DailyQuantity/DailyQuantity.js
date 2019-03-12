import React, {Component} from "react";
import "./DailyQuantity.css"

class DailyQuantity extends Component{
  constructor(props) {
    super(props)

    this.state = {
      text: props.text,
      value: props.value
    }
  }
  render(){
    return(
      <div>
        <input value={this.state.value}></input>
        <p>{this.state.text}</p>
      </div>
    )
  }
}



export default DailyQuantity;
