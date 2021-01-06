console.log("--------------------------------\nLectures\n--------------------------------");

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

/*
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
*/

/////////////// if/else statements

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license! :D');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/////////////// Type conversion and cercion

/*
// Type conversion
var inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Thiago'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion

// plus operator converts everything into string
console.log('I am ' + 23 + ' years old');

// all other arithmatic operators converts everything into numbers
console.log('23' - '10' - 3);
console.log('54' * '2' - 1);
console.log('30' - 15 + '1' - 2);
*/

/////////////// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(4 / 'Thiago'));
console.log(Boolean(''));

console.log(Boolean({}));

const money = 1;
if (money) {
    console.log('Don\'t spend it all ;)');
} else {
    console.log('You should get a job.');
}

let height;

if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is undefined.');
}
*/

/////////////// Equality Operators: == vs. ===

const age = 18;
if (age === '18') console.log('You just became an adult! (strict)');

if (age == '18') console.log('You just became an adult! (loose)');

const favoriteNumber = Number(prompt("What's your favorite number?"));
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) {
    console.log("Wow! 23");
} else if (favoriteNumber === 5) {
    console.log("Wow! 5");
} else {
    console.log("Wow, nice number!");
}

if (favoriteNumber !== 5) {
    console.log("It's not five.");
}