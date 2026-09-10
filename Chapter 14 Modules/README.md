# 📖 Chapter 14: Modules

## 🎯 Learning Objectives

In this chapter, you will learn:

* What TypeScript modules are.
* Why modules are useful.
* How to use `export`.
* How to use `import`.
* Named exports and imports.
* Default exports and imports.
* Renaming exports and imports.
* How to organize a TypeScript project into multiple files.

---

# 1️⃣ What is a Module?

A **module** is a TypeScript file that contains code that can be exported and used by another file.

For example:

```text
student.ts
calculator.ts
user.ts
main.ts
```

Each file can contain its own:

* Variables
* Functions
* Classes
* Interfaces
* Types

We can export them from one file and import them into another.

---

# 2️⃣ Why Use Modules?

Without modules, a large project can become difficult to manage.

For example:

```text
project.ts
```

could contain thousands of lines.

Instead, we can organize it:

```text
students.ts
users.ts
products.ts
orders.ts
calculator.ts
main.ts
```

### Benefits

* Better organization
* Code reusability
* Easier maintenance
* Easier debugging
* Avoids unnecessary global variables
* Useful for large applications

---

# 3️⃣ The `export` Keyword

The `export` keyword makes code available to other modules.

### Example

```typescript
export function greet(): void {
    console.log("Hello!");
}
```

Now another file can use this function.

---

# 4️⃣ The `import` Keyword

The `import` keyword allows us to use exported code from another module.

Suppose `student.ts` contains:

```typescript
export function showStudent(): void {
    console.log("Student information");
}
```

We can import it into another file:

```typescript
import { showStudent } from "./student";

showStudent();
```

---

# 5️⃣ Named Export

A **named export** exports one or more specific items.

```typescript
export const name = "Aditya";

export function greet(): void {
    console.log("Hello!");
}
```

Both can be imported:

```typescript
import { name, greet } from "./student";
```

---

# 6️⃣ Named Imports

When using named exports, use curly braces `{ }`.

```typescript
import { name, greet } from "./student";
```

Then:

```typescript
console.log(name);
greet();
```

The imported names must match the exported names unless we rename them.

---

# 7️⃣ Exporting Multiple Items

We can export multiple items from one file.

### `calculator.ts`

```typescript
export function add(
    a: number,
    b: number
): number {
    return a + b;
}

export function subtract(
    a: number,
    b: number
): number {
    return a - b;
}

export function multiply(
    a: number,
    b: number
): number {
    return a * b;
}
```

Then import them:

```typescript
import {
    add,
    subtract,
    multiply
} from "./calculator";
```

---

# 8️⃣ Default Export

A module can have **one default export**.

Example:

```typescript
export default class Student {
    constructor(
        public name: string,
        public course: string
    ) {}
}
```

The default export can be imported without curly braces:

```typescript
import Student from "./student";
```

Then:

```typescript
const student = new Student(
    "Aditya",
    "BCA"
);
```

---

# 9️⃣ Named Export vs Default Export

### Named Export

```typescript
export function add() {}
```

Import:

```typescript
import { add } from "./calculator";
```

### Default Export

```typescript
export default function add() {}
```

Import:

```typescript
import add from "./calculator";
```

### Important Difference

A file can have:

```text
Many named exports
```

but only:

```text
One default export
```

---

# 🔟 Renaming Imports

We can rename an imported item using `as`.

Suppose:

```typescript
export function greet(): void {
    console.log("Hello!");
}
```

Import it with another name:

```typescript
import {
    greet as sayHello
} from "./student";
```

Now use:

```typescript
sayHello();
```

---

# 1️⃣1️⃣ Renaming Exports

We can also rename something while exporting it.

```typescript
const studentName = "Aditya";

export {
    studentName as name
};
```

Another file can import:

```typescript
import { name } from "./student";
```

---

# 1️⃣2️⃣ Importing Everything

We can import all named exports using `* as`.

### `calculator.ts`

```typescript
export function add(
    a: number,
    b: number
): number {
    return a + b;
}

export function multiply(
    a: number,
    b: number
): number {
    return a * b;
}
```

### `main.ts`

```typescript
import * as calculator from "./calculator";

console.log(
    calculator.add(10, 5)
);

console.log(
    calculator.multiply(10, 5)
);
```

Here `calculator` becomes a namespace containing the exported functions.

---

# 1️⃣3️⃣ Exporting Interfaces

Interfaces can also be exported.

### `user.ts`

```typescript
export interface User {
    id: number;
    name: string;
    email: string;
}
```

Then import it:

```typescript
import { User } from "./user";
```

Use it:

```typescript
const user: User = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com"
};
```

---

# 1️⃣4️⃣ Exporting Type Aliases

Type aliases can also be exported.

```typescript
export type ID = number | string;
```

Import:

```typescript
import { ID } from "./user";
```

Use:

```typescript
let userId: ID;

userId = 101;
userId = "USER-101";
```

---

# 1️⃣5️⃣ Modules in Real Projects

A real application might look like:

```text
src/
│
├── models/
│   ├── user.ts
│   └── product.ts
│
├── services/
│   ├── userService.ts
│   └── productService.ts
│
├── utils/
│   └── calculator.ts
│
└── main.ts
```

Each file handles a specific responsibility.

For example:

```text
models      → Data structures
services    → Application logic
utils       → Reusable helper functions
main.ts     → Main application
```

This makes the project easier to maintain.

---

# 💻 Complete Practical Example

## `student.ts`

```typescript
export interface Student {
    id: number;
    name: string;
    course: string;
}

export function displayStudent(
    student: Student
): void {
    console.log(
        `ID: ${student.id}`
    );

    console.log(
        `Name: ${student.name}`
    );

    console.log(
        `Course: ${student.course}`
    );
}
```

---

## `calculator.ts`

```typescript
export function add(
    a: number,
    b: number
): number {
    return a + b;
}

export function subtract(
    a: number,
    b: number
): number {
    return a - b;
}

export function multiply(
    a: number,
    b: number
): number {
    return a * b;
}

export function divide(
    a: number,
    b: number
): number {
    return a / b;
}
```

---

## `user.ts`

```typescript
export default class User {
    constructor(
        public name: string,
        public email: string
    ) {}

    displayUser(): void {
        console.log(
            `Name: ${this.name}`
        );

        console.log(
            `Email: ${this.email}`
        );
    }
}
```

---

## `main.ts`

```typescript
import {
    Student,
    displayStudent
} from "./student";

import {
    add,
    subtract,
    multiply,
    divide
} from "./calculator";

import User from "./user";


const student: Student = {
    id: 101,
    name: "Aditya",
    course: "BCA"
};

console.log("Student Information:");

displayStudent(student);


console.log("\nCalculator:");

console.log(
    "Addition:",
    add(10, 5)
);

console.log(
    "Subtraction:",
    subtract(10, 5)
);

console.log(
    "Multiplication:",
    multiply(10, 5)
);

console.log(
    "Division:",
    divide(10, 5)
);


console.log("\nUser Information:");

const user = new User(
    "Aditya",
    "aditya@example.com"
);

user.displayUser();
```

---

# ▶️ Compile and Run

Because we now have multiple TypeScript files, compile all files together:

```bash
tsc
```

If you don't have a `tsconfig.json`, you can use:

```bash
tsc main.ts student.ts calculator.ts user.ts
```

Then run:

```bash
node main.js
```

---

# 1️⃣6️⃣ Recommended `tsconfig.json`

For a proper project, create a `tsconfig.json`:

```bash
tsc --init
```

A basic configuration can look like:

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "CommonJS",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    }
}
```

Then simply run:

```bash
tsc
```

The compiled JavaScript files will be placed inside:

```text
dist/
```

Run:

```bash
node dist/main.js
```

---

# 📌 Important Points

* A module is a TypeScript file that can share code with other files.
* `export` makes code available to other modules.
* `import` brings exported code into another module.
* Named exports use `{ }` during import.
* A module can have multiple named exports.
* A module can have only one default export.
* Default imports do not require `{ }`.
* `as` can rename imports or exports.
* `* as` can import all named exports as a namespace.
* Interfaces and type aliases can also be exported.
* Modules help organize large applications.

---

# 🆚 Named Export vs Default Export

| Feature         | Named Export                     | Default Export                  |
| --------------- | -------------------------------- | ------------------------------- |
| Syntax          | `export { name }`                | `export default name`           |
| Import          | `import { name }`                | `import name`                   |
| Number per file | Multiple                         | One                             |
| Curly braces    | Required for normal named import | Not used                        |
| Renaming        | `as`                             | Can choose import name directly |

---

# 🎯 Real-World Use

Modules are extremely important when building projects such as:

```text
E-Commerce Application
        ↓
Products
Users
Orders
Payments
Authentication
Database
API
```

Instead of putting everything into one file, each feature can have its own modules.

This is exactly the type of structure you'll use later when building **React, Node.js, Angular, or other TypeScript applications**.
