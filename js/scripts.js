//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


//user interface logic
let number1=parseInt(prompt("Enter a number:"));
let number2=parseInt(prompt("Enter another number:"));

window.alert("The addition of your numbers equal "+ (add(number1, number2))+ ".")"\n"+("The subtraction of your numbers equal "+ (subtract(number1, number2))+ ".")"\n"+("The multiplication of your numbers equal "+ (multiply(number1, number2))+ ".")"\n"+("The division of your numbers equal "+(divide(number1, number2))+ ".");

