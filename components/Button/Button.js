import React, {Component} from "react";
import "./Button.css"

class Button extends Component {
  constructor(props) {
    super(props)

    this.state={
      width: props.width,
      text: props.text,
      Coeficient: props.Coeficient,
      WeightCoeficient: props.WeightCoeficient,
      HeightCoeficient: props.HeightCoeficient,
      AgeCoeficient: props.AgeCoeficient,
      LifeStyle: props.LifeStyle,
      Aim: props.Aim
    }
  }


  render(){
    return(
      <button
        style={{width: this.state.width}}
        data-Coeficient={this.state.Coeficient}
        data-WeightCoeficient={this.state.WeightCoeficient}
        data-HeightCoeficient={this.state.HeightCoeficient}
        data-AgeCoeficient={this.state.AgeCoeficient}
        data-LifeStyle={this.state.LifeStyle}
        data-Aim={this.state.Aim}
        >{this.state.text}</button>
    )
  }
}

export default Button;
