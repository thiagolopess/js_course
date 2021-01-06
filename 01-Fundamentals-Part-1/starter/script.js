console.log("--------------------------------\nLectures\n--------------------------------")

/////////////// Hello World

/*
let hw = 'hello world';
console.log(hw);
*/


/////////////// Primitive data types

/*
// Number:
let age = 32;

// String
let firstName = 'Thiago';

// Boolean
let fullAge = true;

// Undefined, Null, Symbol and BigInt

let jsIsFun = true;
console.log(jsIsFun);

// Check the type of a value
console.log(typeof jsIsFun);
console.log(typeof 20);
console.log(typeof 'Hello');

// Dynamic Typing
jsIsFun = 1;
console.log(typeof jsIsFun);

// Undefined
let year;
console.log(year);

// NULL problem
console.log(typeof null);
*/


/////////////// var, let and const

/*
// let
let age = 20;
age = 15; // Mutation

// const
const birthYear = 1991; // Constant (cannot be mutated)


// const job; Illegal


// var
var job = 'programmer';
job = 'teacher';
*/


/////////////// Basic operators

/*
// Arithmetic operators
const currentYear = 2021;
const ageThiago = currentYear - 2000;
const ageSarah = currentYear - 2010;
console.log(ageThiago, ageSarah);

console.log(ageThiago * 2, ageThiago / 10, 2 ** 3);
// 2 ** 3 = 2^3 = 2 * 2 * 2;

const firstName = 'Thiago';
const lastName = 'Santos';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x -= 2;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageThiago > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
*/

/////////////// Operators precedences

/*
const currentYear = 2021;
const ageThiago = currentYear - 2000;
const ageSarah = currentYear - 2010;

console.log(currentYear - 2000 > currentYear - 2010);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageThiago + ageSarah) / 2;
console.log(ageThiago, ageSarah, averageAge);
*/

/////////////// Strings and template literals

const firstName = 'Thiago';
const job = 'Software Engineer';
const birthYear = 2000;
const year = 2020;

// Old way
const oldThiago = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(oldThiago);

// New way (Template literals)
const newThiago = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(newThiago);

// Creating multiple lines

// Old way
console.log('String with \n\
multiple\n\
lines.');

// New way
console.log(`String with
multiple
lines.`)
