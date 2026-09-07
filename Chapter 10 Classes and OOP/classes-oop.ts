// ==========================================
// 1. BASIC CLASS AND OBJECT
// ==========================================

class Student {
    constructor(
        public name: string,
        public age: number,
        public course: string
    ) {}

    introduce(): void {
        console.log(`My name is ${this.name}.`);
    }

    study(): void {
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
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ₹${amount}`);
        }
    }

    getBalance(): number {
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
    constructor(
        public name: string,
        protected age: number
    ) {}

    introduce(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class CollegeStudent extends Person {
    constructor(
        name: string,
        age: number,
        public course: string
    ) {
        super(name, age);
    }

    displayStudentInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}

const collegeStudent = new CollegeStudent(
    "Aditya",
    19,
    "BCA"
);

collegeStudent.introduce();
collegeStudent.displayStudentInfo();


// ==========================================
// 4. METHOD OVERRIDING AND POLYMORPHISM
// ==========================================

class Animal {
    makeSound(): void {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks.");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat meows.");
    }
}

const animals: Animal[] = [
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
    constructor(
        public readonly id: number,
        public name: string
    ) {}

    displayUser(): void {
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
    constructor(
        public brand: string,
        public model: string
    ) {}

    displayInfo(): void {
        console.log(`${this.brand} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(
        brand: string,
        model: string,
        public doors: number
    ) {
        super(brand, model);
    }

    startEngine(): void {
        console.log(`${this.brand} ${this.model} engine started.`);
    }
}

class ElectricCar extends Car {
    constructor(
        brand: string,
        model: string,
        doors: number,
        public batteryPercentage: number
    ) {
        super(brand, model, doors);
    }

    chargeBattery(): void {
        this.batteryPercentage = 100;
        console.log("Battery charged to 100%.");
    }
}

const electricCar = new ElectricCar(
    "Tesla",
    "Model 3",
    4,
    75
);

console.log("\nVehicle Information:");

electricCar.displayInfo();
electricCar.startEngine();

console.log(
    `Battery: ${electricCar.batteryPercentage}%`
);

electricCar.chargeBattery();



// output
// Name: Aditya
// Age: 19
// My name is Aditya.
// Aditya is studying BCA.
// Deposited: ₹500
// Current Balance: 1500
// Hello, my name is Aditya.
// Name: Aditya
// Age: 19
// Course: BCA

// Animal Sounds:
// Dog barks.
// Cat meows.
// ID: 101, Name: Rahul

// Vehicle Information:
// Tesla Model 3
// Tesla Model 3 engine started.
// Battery: 75%
// Battery charged to 100%.