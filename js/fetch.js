function getData() {
	return new Promise((resolve, reject) => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then((response) => response.json())
		.then((json) => resolve(json))
		.catch((err) => reject(err));
	});
}

// function displayData(data) {
// 	console.log(data);
// }

// function setError(err) {
// 	console.log("Error:", err);
// }

// function finish() {
// 	console.log("Finished");
// }
// getData().then(displayData).catch(setError).finally(finish);

async function getDataAsync() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	const json = await data.json();
	console.log("result:", json);
}
getDataAsync();
