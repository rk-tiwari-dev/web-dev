/* the clouser in js is a 
function that has access to the outer function scope even after the outer function has returned.*/

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
console.log(newFunction); // [Function: innerFunction]
