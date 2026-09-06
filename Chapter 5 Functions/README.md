# 📖 Chapter 5: Functions

## 🎯 Learning Objectives

In this chapter, you will learn:

* What functions are.
* How to create functions.
* How to use parameters.
* How to define return types.
* Optional parameters.
* Default parameters.
* Arrow functions.
* The difference between `void` and returned values.

---

# 1️⃣ What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we can create a function and call it whenever needed.

### Example

```typescript
function greet(): void {
    console.log("Hello, TypeScript!");
}

greet();
```

### Output

```text
Hello, TypeScript!
```

---

# 2️⃣ Function Parameters

Parameters allow us to pass information to a function.

```typescript
function greet(name: string): void {
    console.log("Hello, " + name);
}

greet("Aditya");
greet("Rahul");
```

### Output

```text
Hello, Aditya
Hello, Rahul
```

Here, `name` is a parameter and must be a `string`.

---

# 3️⃣ Multiple Parameters

A function can have multiple parameters.

```typescript
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(10, 20));
```

### Output

```text
30
```

---

# 4️⃣ Return Types

A return type tells TypeScript what type of value a function will return.

### Syntax

```typescript
function functionName(): returnType {
    // Code
}
```

### Example

```typescript
function getAge(): number {
    return 19;
}
```

---

# 5️⃣ The `void` Return Type

Use `void` when a function does not return a value.

```typescript
function welcome(): void {
    console.log("Welcome to TypeScript!");
}
```

This function performs an action but does not return a value.

---

# 6️⃣ Optional Parameters

Optional parameters use the `?` symbol.

```typescript
function introduce(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

introduce("Aditya");
introduce("Aditya", 19);
```

An optional parameter must generally come after required parameters.

---

# 7️⃣ Default Parameters

A default parameter automatically receives a value if no argument is provided.

```typescript
function greetUser(name: string = "Guest"): void {
    console.log("Hello, " + name);
}

greetUser();
greetUser("Aditya");
```

### Output

```text
Hello, Guest
Hello, Aditya
```

---

# 8️⃣ Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Normal Function

```typescript
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}
```

### Arrow Function

```typescript
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};
```

You can also write a short arrow function:

```typescript
const square = (number: number): number => number * number;
```

---

# 9️⃣ Function with a String Return Type

```typescript
function getFullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

console.log(getFullName("Aditya", "Renuse"));
```

---

# 🔟 Function with a Boolean Return Type

```typescript
function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(isAdult(19));
```

### Output

```text
true
```

---

# 💻 Complete Example

```typescript
// Function without parameters
function welcome(): void {
    console.log("Welcome to TypeScript!");
}

// Function with parameters
function greet(name: string): void {
    console.log("Hello, " + name);
}

// Function with return type
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Optional parameter
function introduce(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

// Default parameter
function greetUser(name: string = "Guest"): void {
    console.log("Hello, " + name);
}

// Arrow function
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};

welcome();
greet("Aditya");

console.log("Addition:", add(10, 20));

introduce("Aditya");
introduce("Aditya", 19);

greetUser();
greetUser("Aditya");

console.log("Multiplication:", multiply(5, 4));
```

---

# 📌 Important Points

* Functions are reusable blocks of code.
* Parameters allow functions to receive values.
* TypeScript allows us to define parameter types.
* Return types define the expected result from a function.
* Use `void` when a function does not return a value.
* Use `?` for optional parameters.
* Default parameters provide fallback values.
* Arrow functions use the `=>` syntax.

