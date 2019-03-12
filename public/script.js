let Coeficient = 0;
let WeightCoeficient = 0;
let HeightCoeficient = 0;
let AgeCoeficient = 0;
let LifeStyle = 1;
let Age = 1;
let Height = 1;
let Weight = 1;
let Aim = 1
let input = document.getElementsByTagName("input")
let button = document.getElementsByTagName("button")
document.getElementsByClassName("input")[0].value= (Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim

//-----> Вибираємо одне з (Поправитись/зберігти масу/похудати)
document.getElementsByTagName("button")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("input")[0].value = parseInt((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim - ((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim)*0.2)
})
document.getElementsByTagName("button")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("input")[0].value = parseInt((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim)
})
document.getElementsByTagName("button")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("input")[0].value = parseInt((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim + ((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim)*0.2)
})
//<----- Вибираємо одне з (Поправитись/зберігти масу/похудати)

//-----> Вибираемо Чоловік/Жінка
for (let i =3; i<=4;i++){
  button[i].addEventListener("click",()=>{
    for(let i=3; i<=4; i++){
      if(button[i].classList.contains("clicked")){
        for(let i=3; i<=4; i++){
          button[i].classList.remove("clicked")
        }
      }
    }
      Coeficient = parseInt(button[i].getAttribute("data-coeficient"))
      WeightCoeficient = parseInt(button[i].getAttribute("data-weightCoeficient"))
      HeightCoeficient = parseInt(button[i].getAttribute("data-heightCoeficient"))
      AgeCoeficient = parseInt(button[i].getAttribute("data-ageCoeficient"))
      document.getElementsByClassName("input")[0].value= (Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim
      if(parseInt(document.getElementsByTagName("input")[0].value) <= 0){
        document.getElementsByTagName("input")[0].value = 1000
      }
  })
}
//<----- Вибираемо Чоловік/Жінка

//-----> Вибираемо Стиль життя
for(let i = 5; i<=9; i++){
  button[i].addEventListener("click",()=>{
    for(let i=5; i<=9; i++){
      if(button[i].classList.contains("clicked")){
        for(let i=5; i<=9; i++){
          button[i].classList.remove("clicked")
        }
      }
    }
    LifeStyle = +(button[i].getAttribute("data-lifestyle"))
    document.getElementsByClassName("input")[0].value= parseInt((Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim)
    if(parseInt(document.getElementsByTagName("input")[0].value) <= 0){
      document.getElementsByTagName("input")[0].value = 1000
    }
  })
}
//<----- Вибираемо Стиль життя

//-----> Вибираемо Вік/вагу/ріст
input[4].onblur = function(){
  Age = input[4].value;
  document.getElementsByClassName("input")[0].value= (Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim
  if(parseInt(document.getElementsByTagName("input")[0].value) <= 0){
    document.getElementsByTagName("input")[0].value = 1000
  }
}
input[5].onblur = function(){
  Height = input[5].value;
  document.getElementsByClassName("input")[0].value= (Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim
  if(parseInt(document.getElementsByTagName("input")[0].value) <= 0){
    document.getElementsByTagName("input")[0].value = 1000
  }
  document.getElementsByTagName("input")[1].value = Height-100
  document.getElementsByTagName("input")[2].value = parseInt(((Height-100)*0.8))
  document.getElementsByTagName("input")[3].value = parseInt(((Height-100)*3.5))
}
input[6].onblur = function(){
  Weight = input[6].value;
  document.getElementsByClassName("input")[0].value= (Coeficient+(WeightCoeficient*Weight)+(HeightCoeficient*Height)-(AgeCoeficient*Age)*LifeStyle)*Aim
  if(parseInt(document.getElementsByTagName("input")[0].value) <= 0){
    document.getElementsByTagName("input")[0].value = 1000
  }
}
//<----- Вибираемо Вік/вагу/ріст

//----> Стилі

for(let i=0; i<=2; i++){
  button[i].addEventListener("click", ()=>{
      if(!(button[i].classList.contains("active"))){
        for(let i=0; i<=2; i++){
          button[i].classList.add("disabled")
          if(button[i].classList.contains("active")){
            button[i].classList.remove("active")
          }
        }
    }
    button[i].classList.toggle("disabled")
    button[i].classList.toggle("active")
  })
}

for(let i=3; i<=4; i++){
  button[i].addEventListener("click", ()=>{
      if(!(button[i].classList.contains("active"))){
        for(let i=3; i<=4; i++){
          button[i].classList.add("disabled")
          if(button[i].classList.contains("active")){
            button[i].classList.remove("active")
          }
        }
    }
    button[i].classList.toggle("disabled")
    button[i].classList.toggle("active")
  })
}

for(let i=5; i<=9; i++){
  button[i].addEventListener("click", ()=>{
      if(!(button[i].classList.contains("active"))){
        for(let i=5; i<=9; i++){
          button[i].classList.add("disabled")
          if(button[i].classList.contains("active")){
            button[i].classList.remove("active")
          }
        }
    }
    button[i].classList.toggle("disabled")
    button[i].classList.toggle("active")
  })
}
//<---- Стилі
