/* the clouser in js is a 
function that has access to the outer function scope even after the outer function has returned.*/

function outerFunction(outerVariable) {
	function innerFunction(innerVariable) {
		console.log('Outer Variable: ' + outerVariable);
		console.log('Inner Variable: ' + innerVariable);
	}
	return innerFunction;
}

const newFunction = outerFunction('outside');
newFunction('inside');
console.log(newFunction); // [Function: innerFunction]
