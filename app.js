const buttons = document.querySelectorAll("input");

let output = "";

const calculate = (Value) =>{
  if(Value ==="=" && Value !== ""){
   output = eval(output.replace("%","/100"))
  }


  
}