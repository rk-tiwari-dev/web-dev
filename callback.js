//call abck in JS is a function that is passed as an argument to another function.
// Example:
var greet = function (cb) {
  console.log("Hello!");
  cb();
};
var sayName = function () {
  console.log("John");
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
  console.log("Hello!");
  cb("John");
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
