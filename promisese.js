// promises in js is a way to avoid call back hell by chaining multiple functions together.
// Example:

const user = {
  id: 1,
  name: 'John',
};

function getUser() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(user.id);
    }, 1000);
  });
}



// Output: 1
//         2
// In the above example, the promise function is used to create a new promise object.
// The promise object takes a callback function with two arguments: resolve and reject.
// The resolve function is used to resolve the promise with a value.
// The reject function is used to reject the promise with an error.
// The setTimeout function is used to delay the execution of the resolve function by 1 second.
// The then method is used to chain multiple functions together.
