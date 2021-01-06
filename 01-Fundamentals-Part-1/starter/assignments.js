console.log("--------------------------------\nAssignments\n--------------------------------")

// LECTURE: Values and Variables
const country = 'Brazil', continent = 'South America';
let population = '200000000';

console.log(country, continent, population);

// LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = 'portuguese';
console.log(language);

/* invalid
isIsland = true;
*/

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population > 33000000);

let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;

console.log(description);