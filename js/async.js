// function orderPizza() {
// 	console.log("ordering a pizza");
// }

// function preparePizza(callbackFn) {
// 	console.log("preparing the pizza");
// 	setTimeout(() => {
// 		console.log("pizza is prepared");
// 		callbackFn();
// 	}, 1000);
// }

// function servedPizza() {
// 	console.log("pizza is served");
// }

// function failedPizza() {
// 	console.log("pizza is not served");
// }

// orderPizza();
// preparePizza(servedPizza);
// preparePizza(failedPizza);
// //servedPizza();

// function greetStudent(name) {
// 	console.log(`Hello ${name}`);
// }

// function getInfo(callbackFn) {
// 	setTimeout(() => {
// 		console.log({
// 			name: "shaunak",
// 			age: 20,
// 		});
// 		callbackFn();
// 	}, 3000);
// }

// function getCard() {
// 	console.log("we got card");
// }

// greetStudent("shaunak");
// getInfo(getCard);

function checkEvenOrOdd() {
	let num = 4;
	setTimeout(() => {
		if (num % 2 == 0) {
			return "Num is even";
		} else {
			return "Num is odd";
		}
	}, 2000);
}

console.log(checkEvenOrOdd()); // undefined

// Promise
function getEvenOddPromise() {
	let num = 45;
	const value = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num % 2 == 0) {
				resolve("Num is even");
			} else {
				reject("Num is odd");
			}
		}, 2000);
	});
	// console.log(value);
	return value;
}
function displayEven() {
	console.log("Num is even");
}
function displayOdd() {
	console.log("Num is odd");
}

// console.log(getEvenOddPromise()); // Promise
getEvenOddPromise().then(displayEven).catch(displayOdd);
