import React, { Component } from 'react';
import "./Result.css"
import TextInput from "../TextInput/TextInput"
import DailyQuantity from "../DailyQuantity/DailyQuantity"

class Result extends Component {
  constructor(props){
    super(props)
    this.state={
      result: props.result
    }
  }
  render(){
    return(
      <div className='result'>
        <div className="norm">
          <h4>Ваша норма: ккал в день</h4>
          <TextInput name={this.state.result} width="90%"/>
        </div>
        <div className="DailyQuantity">
            <h4>Денна кількість</h4>
            <div className="DailyQuantity__wrapper">
              <DailyQuantity text="Білків, г." value="15"/>
              <DailyQuantity text="Жирів, г." value="20"/>
              <DailyQuantity text="Вугливодів, г." value="25"/>
            </div>
        </div>
      </div>
    )
  }
}

export default Result;
