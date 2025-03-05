//here create object
let obj = {
	name: 'Rahul',
	age: 25,
	city: 'Bangalore',
};

//here spread operator is used to copy the object
let obj2 = { ...obj };
console.log(obj2);
//here spread operator is used to copy the object and add a new key value pair
let obj3 = { ...obj, country: 'India' };
console.log(obj3);
//here spread operator is used to copy the object and change the value of a key
let obj4 = { ...obj, age: 26 };
console.log(obj4);
//here spread operator is used to copy the
//  object and add a new key value pair and change the value of a key

//rest oprator
//here we are using rest operator to get the remaining values in the array
let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);
//here we are using rest operator to get the remaining values in the object
let { name, ...rest } = obj;
console.log(name, rest);
//here we are using rest operator to get the remaining values in the object
let { age, ...rest1 } = obj;
console.log(age, rest1);

const numbers = [1, 3, 5, 7, 4, 5, 6];

function addNumbers(a, b, c, d) {
	return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16;
