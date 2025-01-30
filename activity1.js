//PART 1 in-class activity
//Samuel Adams - 01/28/2025
//CMPSC 263

let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;
console.log(score, temperature, greeting, isLearningFun);

const student = {
    name: "Sam",
    age: 21,
    subjects: ["CMPSC 263", "CMPSC 464", "STAT 319", "ENGR 407"],
    isGraduated: false,
};

primeNumbers = [2,3,5,7,11];
primeNumbers[1] = 4;
console.log(primeNumbers[1] + "Mistake detected");
primeNumbers[1] = 3;
console.log(primeNumbers);

let x = 5; let y = 7;
let a = x + y;
let b = x * y;
let c = x % y;
console.log("sum::", a, "product:", b, "modulus:", c);

a = 5 === 7;
b = 5 !== 7;
c = 5 > 7;
console.log(a, b, c);
console.log(a || b);

if (score > 50) {
    console.log("Great job!");
} else {
    console.log("Keep trying!");
}

for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
}

while (score > 0 ) {
    score = score - 10;
}

function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
  
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
  const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
  console.log(countdownMessage); // Outputs the time remaining until 
  
// This function calculates the remaining time until a given date
// It does this by taking the difference between the dates in milliseconds then converts into days, hours, minutes, and seconds
// It then returns a formated string that shows the countdown

function swap(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;
}

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = "";
    for (i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
