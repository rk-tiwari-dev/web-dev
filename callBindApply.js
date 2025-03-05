// call bind apply using object

// here we are using call bind and apply to call the function using object
// we are using call bind and apply to call the function using object

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var maxnum = Math.max.apply(null, arr);
console.log(maxnum);
var minnum = Math.min.apply(null, arr);
console.log(minnum, maxnum);

//using bind an object can be passed as an argument to a function

const person = {
	firstName: 'John',
	lastName: 'Doe',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

const member = {
	firstName: 'Hege',
	lastName: 'Nilsen',
};

let fullName = person.fullName.bind(member);
console.log(fullName());

const personB = {
	firstName: 'John',
	lastName: 'Doe',
	display: function () {
		name = this.firstName + ' ' + this.lastName;
	},
};

let display = personB.display.bind(person);
setTimeout(display, 3000);

const personA = {
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};
const person1 = {
	firstName: 'John',
	lastName: 'Doe',
};
const person2 = {
	firstName: 'Mary',
	lastName: 'Doe',
};

// This will return "Mary Doe"
personA.fullName.call(person2);
