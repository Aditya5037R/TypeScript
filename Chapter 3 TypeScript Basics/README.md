# 📖 Chapter 3: TypeScript Basics

## 🎯 Learning Objectives

In this chapter, you will learn:

* How to declare variables in TypeScript.
* What type annotations are.
* The `string`, `number`, and `boolean` types.
* What type inference is.
* The difference between `any` and `unknown`.

---

# 1️⃣ Variables in TypeScript

Variables are used to store data.

In TypeScript, we can declare variables using:

* `let`
* `const`

### Example

```typescript
let name: string = "Aditya";
let age: number = 19;

const course: string = "BCA";
```

---

# 2️⃣ Type Annotations

A **type annotation** tells TypeScript what type of data a variable should store.

The syntax is:

```typescript
let variableName: type = value;
```

### Example

```typescript
let name: string = "Aditya";
let age: number = 19;
let isStudent: boolean = true;
```

---

# 3️⃣ String Type

The `string` type is used to store text.

```typescript
let firstName: string = "Aditya";
let city: string = "Pune";

console.log(firstName);
console.log(city);
```

---

# 4️⃣ Number Type

The `number` type is used for all numbers, including:

* Integers
* Decimal numbers
* Negative numbers

```typescript
let age: number = 19;
let price: number = 99.99;
let temperature: number = -5;
```

TypeScript uses `number` for all of these.

---

# 5️⃣ Boolean Type

The `boolean` type can only have two values:

```text
true
false
```

### Example

```typescript
let isStudent: boolean = true;
let hasCompletedCourse: boolean = false;
```

---

# 6️⃣ Type Inference

TypeScript can automatically understand the type of a variable based on its initial value.

```typescript
let name = "Aditya";
let age = 19;
let isStudent = true;
```

TypeScript automatically understands:

```text
name      → string
age       → number
isStudent → boolean
```

Therefore, you do not always need to explicitly write the type.

### Example

```typescript
let language = "TypeScript";

// language = 100; // ❌ Error
```

TypeScript already knows that `language` is a string.

---

# 7️⃣ The `any` Type

The `any` type allows a variable to store any type of value.

```typescript
let data: any = "Hello";

data = 100;
data = true;
```

Although `any` is flexible, it reduces TypeScript's ability to find errors.

### Avoid using `any` unnecessarily.

---

# 8️⃣ The `unknown` Type

The `unknown` type can also store any type of value.

```typescript
let value: unknown = "Hello";

value = 100;
value = true;
```

However, `unknown` is safer than `any`.

You must check the type before using an `unknown` value in a type-specific operation.

### Example

```typescript
let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

# 🆚 `any` vs `unknown`

| Feature                | `any`               | `unknown`     |
| ---------------------- | ------------------- | ------------- |
| Can store any value    | Yes                 | Yes           |
| Type safety            | Low                 | Higher        |
| Requires type checking | No                  | Yes           |
| Recommended            | Avoid when possible | Better choice |

---

# 💻 Complete Example

```typescript
// String
let studentName: string = "Aditya";

// Number
let age: number = 19;

// Boolean
let isStudent: boolean = true;

// Type Inference
let language = "TypeScript";

// Any
let data: any = "Hello";
data = 100;

// Unknown
let value: unknown = "Hello TypeScript";

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Language:", language);
console.log("Data:", data);

if (typeof value === "string") {
    console.log("Unknown value:", value.toUpperCase());
}
```

---


# 📌 Important Points

* TypeScript adds types to JavaScript.
* `string` is used for text.
* `number` is used for numbers.
* `boolean` is used for `true` or `false`.
* Type annotations explicitly define a variable's type.
* Type inference allows TypeScript to automatically determine the type.
* Avoid using `any` unless necessary.
* `unknown` is safer than `any`.
