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