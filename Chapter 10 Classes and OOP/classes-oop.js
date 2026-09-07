"use strict";
// ==========================================
// 1. BASIC CLASS AND OBJECT
// ==========================================
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.name}.`);
    }
    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}
const student1 = new Student("Aditya", 19, "BCA");
console.log("Name:", student1.name);
console.log("Age:", student1.age);
student1.introduce();
student1.study();
// ==========================================
// 2. ENCAPSULATION WITH PRIVATE
// ==========================================
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ₹${amount}`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log("Current Balance:", account.getBalance());
// ==========================================
// 3. INHERITANCE
// ==========================================
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
class CollegeStudent extends Person {
    course;
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    displayStudentInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}
const collegeStudent = new CollegeStudent("Aditya", 19, "BCA");
collegeStudent.introduce();
collegeStudent.displayStudentInfo();
// ==========================================
// 4. METHOD OVERRIDING AND POLYMORPHISM
// ==========================================
class Animal {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks.");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows.");
    }
}
const animals = [
    new Dog(),
    new Cat()
];
console.log("\nAnimal Sounds:");
for (const animal of animals) {
    animal.makeSound();
}
// ==========================================
// 5. READONLY PROPERTY
// ==========================================
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    displayUser() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
const user = new User(101, "Aditya");
user.name = "Rahul"; // Allowed
// user.id = 102; // ❌ Error
user.displayUser();
// ==========================================
// 6. PRACTICE EXAMPLE: VEHICLE INHERITANCE
// ==========================================
class Vehicle {
    brand;
    model;
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayInfo() {
        console.log(`${this.brand} ${this.model}`);
    }
}
class Car extends Vehicle {
    doors;
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
}
class ElectricCar extends Car {
    batteryPercentage;
    constructor(brand, model, doors, batteryPercentage) {
        super(brand, model, doors);
        this.batteryPercentage = batteryPercentage;
    }
    chargeBattery() {
        this.batteryPercentage = 100;
        console.log("Battery charged to 100%.");
    }
}
const electricCar = new ElectricCar("Tesla", "Model 3", 4, 75);
console.log("\nVehicle Information:");
electricCar.displayInfo();
electricCar.startEngine();
console.log(`Battery: ${electricCar.batteryPercentage}%`);
electricCar.chargeBattery();
