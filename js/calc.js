const calcForm = document.getElementById("calc-form");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const resultDiv = document.getElementById("result");

const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);

calcForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const x = Number.parseFloat(num1.value);
	const y = Number.parseFloat(num2.value);
	// console.log(calcForm);
	// console.log(x, y);
	
	let result;
	if (operation.value === "add") {
		result = "Addition: " + add(x, y);
	} else if (operation.value === "subtract") {
		result = "Subtraction: " + subtract(x, y);
	} else if (operation.value === "multiply") {
		result = "Multiplication: " + multiply(x, y);
	} else if (operation.value === "divide") {
		if (y == 0.0) {
			result = "ERROR: Cannot divide by zero.";
		} else {
			result = "Division: " + divide(x, y);
		}
	} else {
		result = "Invalid operation";
	}
	resultDiv.textContent = result;
})
