// console.log(document)
// console.dir(document)

// let div1 = document.getElementById("div-1");
// console.log(div1)
// div1.style.backgroundColor = "lightpink";

const myDiv = document.getElementById("div1");
const btn = document.getElementById("id-btn");

// const myPara = document.createElement('p');
// myDiv.appendChild(myPara);
// myPara.textContent = "This is my new paragraph";

// const colors = ["blue", "red", "pink", "lightpink", "yellow", "green"];
// let currentColor = -1;

// btn.addEventListener('click', ()=>{
// 	//currentColor = (currentColor + 1) % colors.length;
// 	currentColor = Math.floor(Math.random() * colors.length);
// 	btn.style.backgroundColor = colors[currentColor];
// 	console.log("Clicked the button");
// });

// let myArr = ['a', 'b', 'c', 'd'];
// myArr.forEach((element) => {
// 	element += "_done";
// 	console.log(element);
// });
// console.log(myArr);

// let numArr = [1, 2, 5, 9, 11, 45];
// const newArr = numArr.filter((element) => (element > 10));
// console.log(newArr);

// numArr.map((element) => {
// 	console.log(element + " good student");
// });

function rectangle(l, b) {
	return l * b;
}

function triangle(b, h) {
	return 0.5 * b * h;
}

function getArea(l, b, fnName) {
	if (fnName === "rec") {
		return rectangle(l, b);
	} else if (fnName === "tri") {
		return triangle(l, b);
	}
}

// Function as a parameter
// getAreaByFunc is higher order function
// functionName is the callback function
// function getAreaByFunc(a, b, functionName) {
// 	return functionName(a, b);
// }

// console.log(getArea(5, 8, "rec")); // 40
// console.log(getArea(10, 5, "tri")); // 25

// console.log(getAreaByFunc(5, 8, rectangle)); // 40
// console.log(getAreaByFunc(10, 5, triangle)); // 25

// Variadic function
/* The rest parameter syntax allows a function to accept an indefinite
number of arguments as an array, providing a way to
represent variadic functions in JavaScript.
*/
function sumAll(...nums) {
	let sum = 0;
	for (const n of nums) {
		sum += n;
	}
	return sum;
}
console.log(sumAll([1, 2, 3],5, 3, 7, 9)); // 24

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 8, 7];
let newArr2 = [...arr1, ...arr2];
console.log(newArr2); // [ 1, 2, 3, 4, 5, 6, 8, 7 ]
