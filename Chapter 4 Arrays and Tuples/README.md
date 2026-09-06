# 📖 Chapter 4: Arrays and Tuples

## 🎯 Learning Objectives

In this chapter, you will learn:

* What arrays are.
* How to create typed arrays.
* Different ways to write array types.
* How to access and modify array elements.
* Common array methods.
* What tuples are.
* The difference between arrays and tuples.

---

# 1️⃣ What is an Array?

An **array** is used to store multiple values in a single variable.

### Example

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];
```

Here, `fruits` is an array that can only contain strings.

---

# 2️⃣ Creating Typed Arrays

The syntax for creating an array is:

```typescript
let variableName: type[] = [];
```

### String Array

```typescript
let names: string[] = ["Aditya", "Rahul", "Amit"];
```

### Number Array

```typescript
let numbers: number[] = [10, 20, 30, 40];
```

### Boolean Array

```typescript
let answers: boolean[] = [true, false, true];
```

---

# 3️⃣ Another Array Syntax

TypeScript also supports this syntax:

```typescript
let numbers: Array<number> = [10, 20, 30];
```

This is equivalent to:

```typescript
let numbers: number[] = [10, 20, 30];
```

For beginners, the `type[]` syntax is easier to read and commonly used.

---

# 4️⃣ Accessing Array Elements

Array indexes start from `0`.

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

### Output

```text
Apple
Banana
Mango
```

---

# 5️⃣ Modifying Array Elements

You can change an array element using its index.

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

### Output

```text
["Apple", "Orange", "Mango"]
```

---

# 6️⃣ Adding Elements to an Array

## `push()`

Adds an element to the end of an array.

```typescript
let languages: string[] = ["JavaScript", "TypeScript"];

languages.push("Java");

console.log(languages);
```

---

## `unshift()`

Adds an element to the beginning of an array.

```typescript
let numbers: number[] = [2, 3, 4];

numbers.unshift(1);

console.log(numbers);
```

---

# 7️⃣ Removing Elements from an Array

## `pop()`

Removes the last element.

```typescript
let numbers: number[] = [10, 20, 30];

numbers.pop();

console.log(numbers);
```

## `shift()`

Removes the first element.

```typescript
let numbers: number[] = [10, 20, 30];

numbers.shift();

console.log(numbers);
```

---

# 8️⃣ Array Length

Use the `length` property to find the number of elements.

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

### Output

```text
3
```

---

# 9️⃣ Looping Through an Array

## Using a `for` loop

```typescript
let languages: string[] = ["JavaScript", "TypeScript", "Python"];

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
```

## Using `for...of`

```typescript
let languages: string[] = ["JavaScript", "TypeScript", "Python"];

for (let language of languages) {
    console.log(language);
}
```

---

# 🔟 What is a Tuple?

A **tuple** is a special type of array where the number of values and their types are defined in advance.

### Example

```typescript
let student: [string, number] = ["Aditya", 19];
```

This tuple expects:

1. A `string`
2. A `number`

The following order is important.

```typescript
let student: [string, number] = ["Aditya", 19];
```

This would produce an error:

```typescript
// let student: [string, number] = [19, "Aditya"];
```

---

# 1️⃣1️⃣ Tuple with Multiple Types

```typescript
let user: [string, number, boolean] = ["Aditya", 19, true];

console.log(user);
```

The tuple has a fixed structure:

```text
Name       → string
Age        → number
Student    → boolean
```

---

# 1️⃣2️⃣ Accessing Tuple Values

Tuple values are accessed using indexes.

```typescript
let student: [string, number] = ["Aditya", 19];

console.log(student[0]);
console.log(student[1]);
```

---

# 🆚 Arrays vs Tuples

| Feature          | Array                 | Tuple                       |
| ---------------- | --------------------- | --------------------------- |
| Number of values | Flexible              | Fixed structure             |
| Data types       | Usually the same type | Can contain different types |
| Example          | `string[]`            | `[string, number]`          |
| Best for         | Lists of similar data | Structured data             |

---

# 💻 Complete Example

```typescript
// String Array
let languages: string[] = ["JavaScript", "TypeScript", "Python"];

// Add an element
languages.push("Java");

console.log("Languages:", languages);

// Number Array
let numbers: number[] = [10, 20, 30, 40];

console.log("First Number:", numbers[0]);
console.log("Total Numbers:", numbers.length);

// Loop through an array
for (let language of languages) {
    console.log(language);
}

// Tuple
let student: [string, number, boolean] = ["Aditya", 19, true];

console.log("Name:", student[0]);
console.log("Age:", student[1]);
console.log("Student:", student[2]);
```

---

# 📌 Important Points

* Arrays store multiple values.
* Array indexes start from `0`.
* `string[]` stores strings.
* `number[]` stores numbers.
* `boolean[]` stores boolean values.
* `push()` adds an element to the end.
* `pop()` removes the last element.
* Tuples define a specific structure and type order.
* Arrays are flexible, while tuples are useful for structured data.

