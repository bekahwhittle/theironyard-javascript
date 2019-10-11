var numBtns = document.querySelectorAll(".numbers");
var opBtns = document.querySelectorAll(".operator");
var display = document.getElementById('display');
var calculate = document.getElementById('equals');
var clear = document.getElementById('clear');
var decimal = document.getElementById('decimal');
var number;
var operator;
var solution;


for (var i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', function(e) {
    var numBtnVal = e.target.innerHTML;
    var svdNumBtnVal= document.getElementById('display').innerHTML;
    if (display.innerHTML.length <= 9) {
      display.innerHTML = svdNumBtnVal + numBtnVal;
    }
    else {
      alert("we don't math like that");
    }
  })
}
for (var i = 0; i < opBtns.length; i++) {
  opBtns[i].addEventListener('click', function(e) {
    number = display.innerHTML;
    operator = e.target.innerHTML;
    console.log(operator);
    display.innerHTML = '';
  })
}
clear.addEventListener('click', function(e) {
    display.innerHTML = '';
})
calculate.addEventListener('click', function(e) {
    if (operator === '+/-') {
      var sign = document.getElementById('sign');
      sign.addEventListener('click', function(e){
        display.innerHTML = '+';
        // how many clicks?
      })
    }
    else if (operator === '+') {
      solution = Number(number) + Number(display.innerHTML);
      display.innerHTML = solution;
    }
    else if (operator === '-') {
      solution = Number(number) - Number(display.innerHTML);
      display.innerHTML = solution;
    }
    else if (operator === 'X') {
      solution = Number(number) * Number(display.innerHTML);
      display.innerHTML = solution;
    }
    else if (operator === '%') {
      var perOfNum = Number(number) / 100;
      solution = Number(perOfNum) * Number(display.innerHTML);
      display.innerHTML = solution;
      console.log(solution);
    }
    else if (operator === '√') {
      solution = Math.sqrt(Number(display.innerHTML));
      display.innerHTML = solution;
    }
    else {
      solution = Number(number) / Number(display.innerHTML);
      display.innerHTML = solution;
    }
    if (display.innerHTML.length > 9) {
      alert(display.innerHTML);
      display.innerHTML = '';
    }
})
