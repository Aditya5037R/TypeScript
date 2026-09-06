// 1. String Array
let languages: string[] = [
    "JavaScript",
    "TypeScript",
    "Python"
];

console.log("Languages:", languages);

// Add an element
languages.push("Java");

console.log("After Push:", languages);


// 2. Number Array
let numbers: number[] = [10, 20, 30, 40];

console.log("First Number:", numbers[0]);
console.log("Total Numbers:", numbers.length);


// 3. Boolean Array
let results: boolean[] = [true, false, true];

console.log("Results:", results);


// 4. Loop through an Array
console.log("\nProgramming Languages:");

for (let language of languages) {
    console.log(language);
}


// 5. Tuple
let student: [string, number, boolean] = [
    "Aditya",
    19,
    true
];

console.log("\nStudent Information:");
console.log("Name:", student[0]);
console.log("Age:", student[1]);
console.log("Is Student:", student[2]);


// output
// Languages: [ 'JavaScript', 'TypeScript', 'Python' ]
// After Push: [ 'JavaScript', 'TypeScript', 'Python', 'Java' ]
// First Number: 10
// Total Numbers: 4
// Results: [ true, false, true ]

// Programming Languages:
// JavaScript
// TypeScript
// Python
// Java

// Student Information:
// Name: Aditya
// Age: 19
// Is Student: true