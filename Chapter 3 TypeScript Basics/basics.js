"use strict";
// Chapter 3: TypeScript Basics
// 1. String
let studentName = "Aditya";
// 2. Number
let age = 19;
// 3. Boolean
let isStudent = true;
// 4. Type Inference
let favoriteLanguage = "TypeScript";
// 5. Any
let data = "Hello";
data = 100;
// 6. Unknown
let value = "Hello TypeScript";
// Display the values
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Favorite Language:", favoriteLanguage);
console.log("Data:", data);
// Type checking with unknown
if (typeof value === "string") {
    console.log("Unknown Value:", value.toUpperCase());
}
