"use strict";
// ==========================================
// 1. UNION TYPES
// ==========================================
let userId = 101;
console.log("User ID:", userId);
userId = "USER-101";
console.log("Updated User ID:", userId);
let currentStatus = "active";
console.log("Status:", currentStatus);
// ==========================================
// 3. UNION TYPE WITH FUNCTION
// ==========================================
function displayValue(value) {
    if (typeof value === "string") {
        console.log("String Value:", value.toUpperCase());
    }
    else {
        console.log("Number Value:", value * 2);
    }
}
displayValue("TypeScript");
displayValue(25);
const student = {
    name: "Aditya",
    age: 19,
    course: "BCA",
    college: "Example College"
};
console.log("\nCollege Student:");
console.log(student);
const payment = {
    name: "Aditya",
    email: "aditya@example.com",
    paymentId: "PAY-101",
    amount: 500,
    status: "completed"
};
console.log("\nCustomer Payment:");
console.log(payment);
// output
// User ID: 101
// Updated User ID: USER-101
// Status: active
// String Value: TYPESCRIPT
// Number Value: 50
// College Student:
// { name: 'Aditya', age: 19, course: 'BCA', college: 'Example College' }
// Customer Payment:
// {
//   name: 'Aditya',
//   email: 'aditya@example.com',
//   paymentId: 'PAY-101',
//   amount: 500,
//   status: 'completed'
// }
