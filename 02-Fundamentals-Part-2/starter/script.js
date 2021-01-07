// Strict Mode
'use strict';

console.log("--------------------------------\nLectures\n--------------------------------")

/////////////// Functions

/*
function logger() {
    console.log('My name is Thiago');
}

// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/////////////// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age2);