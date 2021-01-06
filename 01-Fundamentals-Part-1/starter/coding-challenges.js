console.log("--------------------------------\nCoding Challenge 1\n--------------------------------")

const markMass = 78, markHeight = 1.69, johnMass = 95, johnHeight = 1.88;
const markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

console.log("--------------------------------\nCoding Challenge 2\n--------------------------------")

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI}).`)
}

