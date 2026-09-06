"use strict";
// 1. String Array
let languages = [
    "JavaScript",
    "TypeScript",
    "Python"
];
console.log("Languages:", languages);
// Add an element
languages.push("Java");
console.log("After Push:", languages);
// 2. Number Array
let numbers = [10, 20, 30, 40];
console.log("First Number:", numbers[0]);
console.log("Total Numbers:", numbers.length);
// 3. Boolean Array
let results = [true, false, true];
console.log("Results:", results);
// 4. Loop through an Array
console.log("\nProgramming Languages:");
for (let language of languages) {
    console.log(language);
}
// 5. Tuple
let student = [
    "Aditya",
    19,
    true
];
console.log("\nStudent Information:");
console.log("Name:", student[0]);
console.log("Age:", student[1]);
console.log("Is Student:", student[2]);
