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
let added=add(number1, number2);
let subtracted=subtract(number1, number2);
let multiplied=multiply(number1, number2);
let divided=divide(number1, number2);

window.alert("The addition of your numbers equal "+ added+ ".\n"+
"The subtraction of your numbers equal "+ subtracted+ ".\n"+
"The multiplication of your numbers equal "+ multiplied+ ".\n"+
"The division of your numbers equal "+divided+ ".");

