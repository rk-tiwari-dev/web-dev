function fetchData() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching data:', error);
			return null;
		});
}

function processData() {
	fetchData().then((data) => console.log(data));
}

processData();
