"use strict";
// 1. Object with type annotations
let student = {
    id: 1,
    name: "Aditya",
    age: 19,
    isStudent: true
};
console.log("Student Information:");
console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student:", student.isStudent);
// 2. Modifying an allowed property
student.age = 20;
console.log("\nUpdated Age:", student.age);
// 3. Nested Object
let user = {
    name: "Aditya",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};
console.log("\nAddress Information:");
console.log("City:", user.address.city);
console.log("State:", user.address.state);
// 4. Array of Objects
let students = [
    {
        name: "Aditya",
        age: 19,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 20,
        course: "BCA"
    },
    {
        name: "Amit",
        age: 21,
        course: "BCA"
    }
];
console.log("\nStudent List:");
for (let student of students) {
    console.log("Name:", student.name, "| Age:", student.age, "| Course:", student.course);
}
