// 1. Function without parameters
function welcome(): void {
    console.log("Welcome to TypeScript!");
}


// 2. Function with a parameter
function greet(name: string): void {
    console.log("Hello, " + name);
}


// 3. Function with multiple parameters and a return type
function add(num1: number, num2: number): number {
    return num1 + num2;
}


// 4. Function with an optional parameter
function introduce(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}


// 5. Function with a default parameter
function greetUser(name: string = "Guest"): void {
    console.log("Hello, " + name);
}


// 6. Arrow function
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};


// 7. Boolean return type
function isAdult(age: number): boolean {
    return age >= 18;
}


// Calling the functions
welcome();

greet("Aditya");

console.log("Addition:", add(10, 20));

introduce("Aditya");
introduce("Aditya", 19);

greetUser();
greetUser("Aditya");

console.log("Multiplication:", multiply(5, 4));

console.log("Is Adult:", isAdult(19));



// output
// Welcome to TypeScript!
// Hello, Aditya
// Addition: 30
// Name: Aditya
// Name: Aditya
// Age: 19
// Hello, Guest
// Hello, Aditya
// Multiplication: 20
// Is Adult: true