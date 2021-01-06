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

console.log("--------------------------------\nCoding Challenge 3\n--------------------------------")

const dolphinsScore = (100 + 95 + 100) / 3;
const koalasScore = (100 + 95 + 100) / 3;

if (dolphinsScore > 100 || koalasScore > 100) {
    if (dolphinsScore > koalasScore) {
        console.log(`Dolphins are the winners! Score: ${dolphinsScore}`);
    } else if (koalasScore > dolphinsScore) {
        console.log(`Koalas are the winners! Score: ${koalasScore}`);
    } else {
        console.log(`It's a draw! Score: ${dolphinsScore}`);
    }
} else {
    console.log(`Both of the teams didn't get the minimum 100 average score.\nDolphins Score: ${dolphinsScore}\nKoalas Score: ${koalasScore}`);
}