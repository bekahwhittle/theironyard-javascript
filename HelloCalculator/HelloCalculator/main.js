// define variables for use
var calculate = document.querySelector('.calculate');
var firstNum = document.querySelector('.first-input');
var secondNum = document.querySelector('.second-input');
var output = document.querySelector('.display');

calculate.onclick = addProperties;

// function runs through if statement
function addProperties() {
  var answer = Number(firstNum.value) + Number(secondNum.value);
  if (isNaN(answer)) {
    var warning = "Math is hard";
    output.innerHTML = warning;
  } else {
    output.innerHTML = answer;
  }
}
