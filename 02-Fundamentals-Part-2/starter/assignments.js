// Strict Mode
'use strict';

console.log("--------------------------------\nAssignments\n--------------------------------")

/////////////// 1- LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million habitants and its capital city is ${capitalCity}.`;
}

const country1 = describeCountry('Brazil', '200', 'Brasilia');
const country2 = describeCountry('USA', '300', 'Washington, D.C');
const country3 = describeCountry('Canada', '37', 'Ottawa');

console.log(`${country1}\n${country2}\n${country3}`);

/////////////// 2- LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population * 100 / 7900;
}

const brazil = percentageOfWorld1(200);
console.log(brazil);
const usa = percentageOfWorld1(300);
console.log(usa);
const canada = percentageOfWorld1(37);
console.log(canada);

const percentageOfWorld2 = function (population) {
    return population * 100 / 7900;
}

/*
const brazil2 = percentageOfWorld2(200);
console.log(brazil2);
const usa2 = percentageOfWorld2(300);
console.log(usa2);
const canada2 = percentageOfWorld2(37);
console.log(canada2);
*/

///////////////  3- LECTURE: Arrow Functions

const percentageOfWorld3 = population => population * 100 / 7900;

const brazil3 = percentageOfWorld3(200);
console.log(brazil3);
const usa3 = percentageOfWorld3(300);
console.log(usa3);
const canada3 = percentageOfWorld3(37);
console.log(canada3);
