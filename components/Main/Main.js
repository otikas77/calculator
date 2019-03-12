import React, { Component } from 'react';
import "./Main.css"
import Button from "../Button/Button"
import Input from "../Inputs/Input"

class Main extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className='main'>
        <div className="aim">
          <h4>Ваша ціль:</h4>
          <div className="button__wrapper">
            <Button
              width="30%"
              text="Схуднути"
              Aim = {0.2}
              />
            <Button
              width="30%"
              text="Зберігти вагу"
              Aim = {1}/>
            <Button
              width="30%"
              text="Набрати вагу"
              Aim = {0.2} />
          </div>
          <h4>Ваша стать:</h4>
            <div className="button__wrapper">
              <Button
                width="45%"
                text="Чоловіча"
                Coeficient = {88.36}
                WeightCoeficient = {13.4}
                HeightCoeficient = {4.8}
                AgeCoeficient = {5.7}
                />
              <Button
                width="45%"
                text="Жіноча"
                Coeficient = {447.6}
                WeightCoeficient = {9.2}
                HeightCoeficient = {3.1}
                AgeCoeficient = {4.3}
                />
            </div>
          <div className="Input__data">
            <div className="Input__data__wrapper">
                <h4>Ваш вік (Років):</h4>
                <Input/>
            </div>
            <div className="Input__data__wrapper">
                <h4>Ріст (см):</h4>
                <Input/>
            </div>
            <div className="Input__data__wrapper">
                <h4>Вага (кг):</h4>
                <Input/>
            </div>
          </div>
          <h4>Ваша стиль життя:</h4>
            <div className="button__wrapper">
              <Button width="300px" text="Сидячий образ життя" LifeStyle={1.2}/>
              <Button width="300px" text="Помірна активність" LifeStyle={1.375}/>
              <Button width="300px" text="Середня активність" LifeStyle={1.55}/>
              <Button width="300px" text="Активна людина" LifeStyle={1.725}/>
              <Button width="300px" text="Екстремальна активність" LifeStyle={1.9}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Main;
