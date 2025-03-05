//call abck in JS is a function that is passed as an argument to another function.
// Example:
var greet = function (cb) {
	console.log('Hello!');
	cb();
};
var sayName = function () {
	console.log('John');
};
greet(sayName);
// Output: Hello!
//         John
// In the above example, the sayName function is passed as an argument to the greet function.
// The greet function calls the cb function, which is the sayName function in this case.
// The output is Hello! followed by John.
// The callback function is executed inside the main function.
// The callback function can also be passed with arguments.
// Example:
var greet = function (cb) {
	console.log('Hello!');
	cb('John');
};
var sayName = function (name) {
	console.log(name);
};
greet(sayName);
// Output: Hello!
//         John
// In this example, the greet function passes the name John to the sayName function.
// The output is Hello! followed by John.
// Callback functions are used in asynchronous programming.

function calc(a, b, callback) {
	return callback(a, b);
}

function add(x, y) {
	return x + y;
}

function mul(x, y) {
	return x * y;
}

console.log(calc(5, 3, add));
console.log(calc(5, 3, mul));



function fetch(callback) {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => callback(data))
		.catch((error) => console.error('Error:', error));
}

function handle(data) {
	console.log('Fetched Data:', data);
}

fetch(handle);