let calculation = localStorage.getItem('res') || '';

function displayCalculation() {
  document.querySelector('.js-result').innerHTML = calculation;
}

displayCalculation();

function updateCalculation(value) {
  if (value === '=') {
    calculation = eval(calculation);
    displayCalculation();
  }
  else {
    calculation += value;
    displayCalculation();
  }
  localStorage.setItem('res', calculation);
}