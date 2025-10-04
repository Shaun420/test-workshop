let studentObj = {
	firstName : "Shubham",
	age : 20,
	hobbies : ["cricket", "bgmi", "timepass"],
	address : {
		flatNo : 204,
		street : "Yerwada",
		city : "Pune"
	},
	isInClass : true
}

console.log(studentObj.firstName)
console.log(studentObj)

console.log(Object.keys(studentObj))

for (const key in studentObj) {
	if (studentObj.hasOwnProperty(key)) {
		console.log(key, ":", studentObj[key])
	}
}

const studentArr = [
	{firstName: "vivek", age: 25},
	{firstName: "shubham", age: 20},
	{firstName: "shaunak", age: 20},
	{firstName: "viraj", age: 35}
];

console.log("Persons with age greater than 15:")
for (let i = 0; i < studentArr.length; i++) {
	if (studentArr[i].age > 15) {
		console.log(studentArr[i].firstName);
	}
}
