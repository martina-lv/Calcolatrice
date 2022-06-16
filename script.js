function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

const firstNum = prompt("Inserisci il primo numero a due cifre");
const operator = prompt("Inserisci un operatore tra: + - * /");
const secondNum = prompt("Inserisci il secondo numero a due cifre");
const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

let result;

switch (operator) {
  case "+":
    result = sum(parsedFirstNum, parsedSecondNum);
    break;
  case "-":
    result = sub(parsedFirstNum, parsedSecondNum);
    break;
  case "*":
    result = mult(parsedFirstNum, parsedSecondNum);
    break;
  case "/":
    result = div(parsedFirstNum, parsedSecondNum);
  default:
    console.log("Operazione non valida");
}

if (
  parsedFirstNum < 10 ||
  parsedFirstNum > 99 ||
  parsedSecondNum < 10 ||
  parsedSecondNum > 99
) {
  console.log("Cifra inserita non valida");
}
console.log(result);
