const billInputEl = document.getElementById("bill");
const tipPercentageEl = document.getElementById("tip");
const calcBtnEl = document.getElementById("calculate");
const totalSum = document.getElementById('total')
const numOfDiners = document.getElementById("numDiners");

function calculateTotal() {
  const billValue = billInputEl.value;
  const tipPercentage = tipPercentageEl.value 
  const diners = numOfDiners.value
  const total = billValue *(1 + tipPercentage / 100) / diners
  totalSum.innerText = total.toFixed(2)
  console.log(diners);

}

calcBtnEl.addEventListener("click", calculateTotal);
