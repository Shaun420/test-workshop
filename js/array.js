let nameArr = ["A", "B", "C"]

console.log(nameArr[0]);
for (let i = 0; i < nameArr.length; i++) {
	console.log(nameArr[i]);
}

let arr1 = [40, 45, 82, 75, 61];

let resultArr = [];

for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] > 42) {
		resultArr.push(arr1[i]);
	}
}
console.log("Result:", resultArr);

let evenArr = [];
let oddArr = [];
for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] % 2 == 0) {
		evenArr.push(arr1[i]);
	} else {
		oddArr.push(arr1[i]);
	}
}
console.log("Even array:", evenArr);
console.log("Odd array:", oddArr);
