const firstOperand = document.getElementById("first-operand");
const secondOperand = document.getElementById("second-operand");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const result = document.getElementById("result");
const reset = document.querySelector(".btn-reset button");

addition.addEventListener("click", () => {
  let num1 = parseInt(firstOperand.value);
  let num2 = parseInt(secondOperand.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    result.innerHTML = num1 + num2;
  } else {
    result.innerHTML = "";
  }
});

subtraction.addEventListener("click", () => {
  let num1 = parseInt(firstOperand.value);
  let num2 = parseInt(secondOperand.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    result.innerHTML = num1 - num2;
  } else {
    result.innerHTML = "";
  }
});

multiplication.addEventListener("click", () => {
  let num1 = parseInt(firstOperand.value);
  let num2 = parseInt(secondOperand.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    result.innerHTML = num1 * num2;
  } else {
    result.innerHTML = "";
  }
});

division.addEventListener("click", () => {
  let num1 = parseInt(firstOperand.value);
  let num2 = parseInt(secondOperand.value);

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 === 0) {
      result.innerHTML = "Tidak bisa dibagi dengan 0";
    } else {
      result.innerHTML = num1 / num2;
    }
  } else {
    result.innerHTML = "";
  }
});

reset.addEventListener("click", () => {
  firstOperand.value = "";
  secondOperand.value = "";
  result.innerHTML = "";
});
