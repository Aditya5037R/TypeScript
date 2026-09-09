"use strict";
// ==========================================
// 1. TYPEOF TYPE GUARD
// ==========================================
function displayValue(value) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    }
    else {
        console.log("Number:", value * 2);
    }
}
displayValue("TypeScript");
displayValue(25);
function displayPerson(person) {
    if ("course" in person) {
        console.log(`${person.name} studies ${person.course}`);
    }
    else {
        console.log(`${person.name} teaches ${person.subject}`);
    }
}
displayPerson({
    name: "Aditya",
    course: "BCA"
});
displayPerson({
    name: "Rahul",
    subject: "TypeScript"
});
// ==========================================
// 3. INSTANCEOF TYPE GUARD
// ==========================================
class Dog {
    bark() {
        console.log("Dog says: Woof!");
    }
}
class Cat {
    meow() {
        console.log("Cat says: Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
// ==========================================
// 4. CUSTOM TYPE GUARD
// ==========================================
function isStudent(person) {
    return "course" in person;
}
function identifyPerson(person) {
    if (isStudent(person)) {
        console.log(`${person.name} is a student of ${person.course}`);
    }
    else {
        console.log(`${person.name} teaches ${person.subject}`);
    }
}
identifyPerson({
    name: "Aditya",
    course: "BCA"
});
identifyPerson({
    name: "Amit",
    subject: "Java"
});
function displayUser(user) {
    switch (user.role) {
        case "admin":
            console.log(`${user.name} is an admin.`);
            console.log("Permissions:", user.permissions);
            break;
        case "student":
            console.log(`${user.name} is a student of ${user.course}.`);
            break;
        case "teacher":
            console.log(`${user.name} teaches ${user.subject}.`);
            break;
    }
}
const admin = {
    role: "admin",
    name: "Aditya",
    permissions: [
        "read",
        "write",
        "delete"
    ]
};
const student = {
    role: "student",
    name: "Rahul",
    course: "BCA"
};
const teacher = {
    role: "teacher",
    name: "Amit",
    subject: "TypeScript"
};
console.log("\nUser Information:");
displayUser(admin);
displayUser(student);
displayUser(teacher);
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            const exhaustiveCheck = shape;
            return exhaustiveCheck;
    }
}
console.log("\nCircle Area:", getArea({ type: "circle", radius: 5 }));
console.log("Square Area:", getArea({ type: "square", side: 4 }));
// output
// String: TYPESCRIPT
// Number: 50
// Aditya studies BCA
// Rahul teaches TypeScript
// Dog says: Woof!
// Cat says: Meow!
// Aditya is a student of BCA
// Amit teaches Java
// User Information:
// Aditya is an admin.
// Permissions: [ 'read', 'write', 'delete' ]
// Rahul is a student of BCA.
// Amit teaches TypeScript.
// Circle Area: 78.53981633974483
// Square Area: 16
