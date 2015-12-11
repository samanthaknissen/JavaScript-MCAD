var calculate = document.getElementById('calculateTip');
var tipElem = document.getElementById("tip");

calculate.addEventListener('click', calc);

function calc(e) {
  e.preventDefault();

  var input = document.getElementById('bill');
  var bill = parseFloat(input.value);
  var tip = bill * 0.20;

  // tipElem.textContent = "$"+(tip).toFixed(2);
  document.getElementById("tip").innerHTML = "$"+(tip).toFixed(2);
}
