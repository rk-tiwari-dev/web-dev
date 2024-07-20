/*binding in JS  is the process of linking a function with an object that contains the function.
Binding is of three types:
1. Implicit binding
2. Explicit binding
3. new binding
4. window binding
*/
// 1. Implicit binding
// When a function is called by a preceding dot, the object before that dot is this.
// Example:
var person = {
  name: "John",
  age: 23,
  sayName: function () {
    console.log(this.name);
  },
};
person.sayName();
// Output: John
// 2. Explicit binding
// When a function’s call or apply method is used, this is explicitly defined.
// Example:
var sayName = function () {
  console.log(this.name);
};

var person1 = {
  name: "John",
};
var person2 = {
  name: "Bob",
};
sayName.call(person1);
sayName.call(person2);
// Output: John
//         Bob
// 3. new binding
// When a constructor function is used, this refers to the specific
//instance of the object that is created and returned by the constructor function.

// Example:
var Animal = function (color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal("black and white", "Zorro", "Zebra");
console.log(zebra.color);
console.log(zebra.name);
console.log(zebra.type);
// Output: black and white
//         Zorro
//         Zebra
// 4. window binding
// When none of the above rules apply, this is bound to the global object.
// Example:
var sayAge = function () {
  console.log(this.age);
};

var person = {
  name: "John",
  age: 30,
};
sayAge();
// Output: undefined
// In this example, this.age is not defined, so it returns undefined.
// To avoid this, you can use strict mode.
("use strict");
var sayAge = function () {
  console.log(this.age);
};

var person = {
  name: "John",
  age: 30,
};
sayAge();
// Output: TypeError: Cannot read property 'age' of undefined
// In this example, an error is thrown because this is undefined in strict mode.
// To avoid this, you can use the call method to define this explicitly.
var sayAge = function () {
  console.log(this.age);
};

//learn more about binding
