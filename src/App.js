import React, { Component } from 'react';
import './App.css';
import Result from "./components/Result/Result"
import Main from "./components/Main/Main"


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      BasicValue: 88.36,
      WeightСoefficient: 13.4,
      Weight: 1,
      HeightСoefficient: 4.8,
      Height: 1,
      AgeСoefficient: 5.7,
      Age: 1
    }

  }

  render() {
    return (
      <div className="wrapper">
          <div className="calculator__wrapper">
              <Result result={this.state.BasicValue+(this.state.WeightСoefficient*1)+(this.state.HeightСoefficient*this.state.Height)-(this.state.AgeСoefficient*this.state.Age)} />
              <Main />
              <p class='small'>
                <small>*Денна норма калорій розрахована за формулою Харріса-Бенедикта</small>
              </p>
          </div>
      </div>
    );
  }}

export default App;
