//object destructuring in js
//object destructuring is a way to extract multiple properties from an object and bind them to variables
//object destructuring is a way to extract multiple properties from an object and bind them to variables

let obj = {
    name: 'Rahul',
    age: 25,
    city: 'Bangalore',
};

let { name, age, city } = obj;
console.log(name, age, city);


const profile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@rg.com',
}

const { firstName, lastName, email } = profile;
console.log(firstName, lastName, email);    