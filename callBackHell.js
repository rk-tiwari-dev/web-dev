//call back hell in js is a situation where you have multiple nested call back functions.
// Example:
setTimeout(function () {
  console.log("First");
  setTimeout(function () {
    console.log("Second");
    setTimeout(function () {
      console.log("Third");
    }, 3000);
  }, 2000);
}, 1000);

// In the above example, the setTimeout function is called three times, each time with a callback function.
// The output is First, Second, and Third, with a delay of 1, 2, and 3 seconds, respectively.
// The setTimeout function is used to delay the execution of the callback function.
// The callback function is executed after the specified delay.
// The setTimeout function is a built-in function in JavaScript that is
// used to execute a function after a specified delay.
// The setTimeout function takes two arguments: the callback function and the delay in milliseconds.
// The setTimeout function is used to delay the execution of the callback function.
// The callback function is executed after the specified delay.
// The setTimeout function is a built-in function in JavaScript that is
// used to execute a function after a specified delay.
// The setTimeout function takes two arguments: the callback function and the delay in milliseconds.
// The setTimeout function is used to delay the execution of the callback function.
// The callback function is executed after the specified delay.
