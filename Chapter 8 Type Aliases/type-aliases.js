"use strict";
let name = "Aditya";
console.log("Name:", name);
let userId = 101;
console.log("User ID:", userId);
userId = "USER-101";
console.log("Updated User ID:", userId);
let currentStatus = "active";
console.log("Status:", currentStatus);
// 5. Creating Objects
const student1 = {
    id: 1,
    name: "Aditya",
    age: 19,
    course: "BCA",
    status: "active"
};
const student2 = {
    id: "STU-002",
    name: "Rahul",
    age: 20,
    course: "BCA",
    status: "inactive",
    email: "rahul@example.com"
};
console.log("\nStudent 1:", student1);
console.log("Student 2:", student2);
const collegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};
console.log("\nCollege Student:", collegeStudent);
const add = (num1, num2) => num1 + num2;
console.log("\nAddition:", add(10, 20));
