/*
Questions:
1. Features of ES6
2. Difference between null and undefined
3. Variable hoisting
4. Global variables and block scoped variables (let and const)
*/

console.log("Hello from external.html");
// Comment
/* Multi-line comment
still a comment
*/
var sentence = "This is a long sentence with no meaning";
console.log(sentence);

console.log("1" + 1); // 11
console.log("11" - 1); // 10
var myName = "Shaunak";
console.log("My name is", myName); // My name is Shaunak

/*
	FEATURES OF ES6
	1. Template literals
	2. 
*/

// Template literals
var occupation = "student";
var a = `My name is ${myName}
and I am a ${occupation}`;
console.log(a);

// variable hoisting
// take all variable declarations to the top

var a = 10;
var b = "10";
console.log(a == b); // true
console.log(a != b); // false
console.log(a === b); // false
console.log(a !== b); // true

a = 20;
if (a > b) {
	console.log("a is greater than b.");
} else if (a < b) {
	console.log("a is less than b.");
} else {
	console.log("a is equal to b.");
}

// Global variables and block scoped variables
let num1 = 7;
let num2 = 6;
let num3 = 45;
if (num1 > num2) {
	let num3 = 47;
	console.log(num3); // 47
	console.log("num1 is bigger"); // num1 is bigger
}
console.log(num3); // 45
