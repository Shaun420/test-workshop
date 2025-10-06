const userForm = document.getElementById("user-form");
const submitBtn = document.getElementById("submit-btn");

userForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(e);
	// console.dir(userForm);
	// console.dir(userForm[2]);
	const firstName = document.getElementById("firstName").value;
	const age = document.getElementById("age").value;
	const email = document.getElementById("email").value;
	// console.log(firstName);
	// console.log(age);
	// console.log(email);
	const tableBody = document.getElementById("table-body");
	const row = document.createElement("tr");
	tableBody.appendChild(row);
	row.innerHTML = `
				<td>${firstName}</td>
				<td>${age}</td>
				<td>${email}</td>
				`;
	userForm.reset();
});
