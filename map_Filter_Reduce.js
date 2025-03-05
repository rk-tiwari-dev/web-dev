// here we are making use of map fiter and reduce using one single opration function
// we are using map to get the square of the number
// we are using filter to get the even number
// we are using reduce to get the sum of the numbers
// we are using one single function to do all the operations

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sqr = numbers.map((num) => num * num);
const even = numbers.filter((num) => num % 2 == 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sqr), console.log(even), console.log(sum);
