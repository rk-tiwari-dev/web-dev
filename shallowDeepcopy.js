//shallow and deep copy in javascript
//shallow copy
let obj = {
    name: 'Rahul',
    age: 25,
    city: 'Bangalore',
};
let obj2 = { ...obj };
console.log(obj2);

//deep copy
let obj3 = {
    name: 'Rahul',
    age: 25,
    city: 'Bangalore',
    address: {
        street: 'MG Road',
        pincode: 560001,
    },
};
obj3.address.street = 'Brigade Road';
console.log(obj3);
let obj4 = JSON.parse(JSON.stringify(obj3));
console.log(obj4);
//output
// { name: 'Rahul', age: 25, city: 'Bangalore' }
// {
//     name: 'Rahul',
//     age: 25,
//     city: 'Bangalore',
//     address: { street: 'MG Road', pincode: 560001 }
// }
