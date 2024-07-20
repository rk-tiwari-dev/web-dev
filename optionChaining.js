// Option chaning in js is a way to avoid call back hell by chaining multiple functions together.
// Example:
 var promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
        resolve(1);
    }
    , 1000);
    }
);
promise.then(function (result) {
  console.log(result);
  return result * 2;
})
.then(function (result) {
  console.log(result);
  return result * 2;
})

.then(function (result) {
    console.log(result);
    return result * 2;
    }
)
// Output: 1
//         2
//         4
// In the above example, the promise function is used to create a new promise object.
// The promise object takes a callback function with two arguments: resolve and reject.
// The resolve function is used to resolve the promise with a value.
// The reject function is used to reject the promise with an error.
// The setTimeout function is used to delay the execution of the resolve function by 1 second.
// The then method is used to chain multiple functions together.
// The then method takes a callback function as an argument.
// The callback function is executed when the promise is resolved.
// The then method returns a new promise object.
// The new promise object can be chained with another then method.
// The then method can be used to chain multiple functions together.
// The then method returns a new promise object.
// The new promise object can be chained with another then method.
// The then method can be used to chain multiple functions together.
// The then method returns a new promise object.