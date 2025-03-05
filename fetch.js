fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Error fetching data:', error));

    

async function fetchData() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1'
		);
		return await response.json();
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}

async function processData() {
	const data = await fetchData();
	console.log(data);
}

processData();


console.log('fetch.js',processData());
