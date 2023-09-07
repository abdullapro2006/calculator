
const buttons = document.querySelector(".percantage");
const display = document.querySelector(".display")

let output = "";

const calculate = (Value)=>{
  if(Value === "=" && Value !== "" ){
    output = eval(output.replace("%","/100"));


  }

  display.value = output;
}


buttons.forEach((button)=>{
  button.addEventListener("click",(e) => calculate(e.target.dataset.value));
})
 

