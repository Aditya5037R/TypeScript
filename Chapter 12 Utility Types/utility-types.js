"use strict";
// ==========================================
// BASE INTERFACE
// ==========================================
const userUpdate = {
    name: "Rahul"
};
console.log("Partial User:", userUpdate);
const completeUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19,
    password: "example"
};
console.log("\nRequired User:", completeUser);
const profile = {
    name: "Aditya",
    email: "aditya@example.com"
};
console.log("\nUser Profile:", profile);
const publicUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19
};
console.log("\nPublic User:", publicUser);
const permissions = {
    admin: ["read", "write", "delete"],
    student: ["read"],
    teacher: ["read", "write"]
};
console.log("\nRole Permissions:", permissions);
const savedUser = {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    password: "example"
};
console.log("\nReadonly User:", savedUser);
const productUpdate = {
    price: 49999
};
const completeProduct = {
    id: 101,
    name: "Laptop",
    price: 50000,
    description: "A powerful laptop",
    category: "Electronics"
};
const preview = {
    name: "Laptop",
    price: 50000
};
const newProduct = {
    name: "Keyboard",
    price: 1500,
    category: "Electronics"
};
const categories = {
    electronics: "Electronic devices and accessories",
    clothing: "Clothes and fashion products",
    books: "Books and educational materials"
};
const savedProduct = {
    id: 102,
    name: "Mouse",
    price: 800,
    category: "Electronics"
};
console.log("\nProduct Update:", productUpdate);
console.log("Complete Product:", completeProduct);
console.log("Product Preview:", preview);
console.log("New Product:", newProduct);
console.log("Categories:", categories);
console.log("Saved Product:", savedProduct);
// output
// Partial User: { name: 'Rahul' }
// Required User: {
//   id: 1,
//   name: 'Aditya',
//   email: 'aditya@example.com',
//   age: 19,
//   password: 'example'
// }
// User Profile: { name: 'Aditya', email: 'aditya@example.com' }
// Public User: { id: 1, name: 'Aditya', email: 'aditya@example.com', age: 19 }
// Role Permissions: {
//   admin: [ 'read', 'write', 'delete' ],
//   student: [ 'read' ],
//   teacher: [ 'read', 'write' ]
// }
// Readonly User: {
//   id: 2,
//   name: 'Rahul',
//   email: 'rahul@example.com',
//   password: 'example'
// }
// Product Update: { price: 49999 }
// Complete Product: {
//   id: 101,
//   name: 'Laptop',
//   price: 50000,
//   description: 'A powerful laptop',
//   category: 'Electronics'
// }
// Product Preview: { name: 'Laptop', price: 50000 }
// New Product: { name: 'Keyboard', price: 1500, category: 'Electronics' }
// Categories: {
//   electronics: 'Electronic devices and accessories',
//   clothing: 'Clothes and fashion products',
//   books: 'Books and educational materials'
// }
// Saved Product: { id: 102, name: 'Mouse', price: 800, category: 'Electronics' }
