console.log("--------------------------------\nAssignments\n--------------------------------")

/////////////// 1- LECTURE: Values and Variables
const country = 'Brazil', continent = 'South America';
let population = 200000000;

console.log(country, continent, population);

/////////////// 2- LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/////////////// 3- LECTURE: let, const and var
language = 'chinese';
console.log(language);

/* invalid
isIsland = true;
*/

/////////////// 4- LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population > 33000000);

let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;

console.log(description);

/////////////// 5- LECTURE: Strings and Template Literals
description = `${country} is in ${continent} and its ${population} people speak ${language}`;
console.log(description);

/////////////// 6- LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average`);
}

/////////////// 7- LECTURE: Type Conversion and Coercion

console.log('9' - '5'); // 4 int
console.log('19' - '13' + '17'); // 617 string
console.log('19' - '13' + 17); // 23 int
console.log('123' < 57); // false bool
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 int

/////////////// 8- LECTURE: Equality Operators: == vs. ===

const numNeighbours = 0 //Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

/////////////// 9- LECTURE: Logical Operators

const speakEnglish = true;

if (speakEnglish && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

/////////////// 10- LECTURE: The switch Statement

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
        console.log(`'3rd place`);
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language! :D`);
        break;
}