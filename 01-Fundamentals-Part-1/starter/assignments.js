console.log("--------------------------------\nAssignments\n--------------------------------")

/////////////// LECTURE: Values and Variables
const country = 'Brazil', continent = 'South America';
let population = 200000000;

console.log(country, continent, population);

/////////////// LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/////////////// LECTURE: let, const and var
language = 'portuguese';
console.log(language);

/* invalid
isIsland = true;
*/

/////////////// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population > 33000000);

let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;

console.log(description);

/////////////// LECTURE: Strings and Template Literals
description = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);

/////////////// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average`);
}

/////////////// LECTURE: Type Conversion and Coercion

console.log('9' - '5'); // 4 int
console.log('19' - '13' + '17'); // 617 string
console.log('19' - '13' + 17); // 23 int
console.log('123' < 57); // false bool
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 int

/////////////// LECTURE: Equality Operators: == vs. ===

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

