# 📖 Chapter 1: Introduction to TypeScript

## 🎯 Learning Objectives

In this chapter, you will learn:

* What TypeScript is.
* Why TypeScript was created.
* The difference between TypeScript and JavaScript.
* Advantages of TypeScript.
* How TypeScript works.
* Where TypeScript is used.

---

# 🤔 What is TypeScript?

**TypeScript is a programming language developed and maintained by Microsoft.**

TypeScript is a **superset of JavaScript**, which means TypeScript includes all JavaScript features and adds additional features such as **static typing**.

In simple words:

```text
TypeScript = JavaScript + Static Types
```

Example:

### JavaScript

```javascript
let age = 19;

age = "Aditya";
```

JavaScript allows the value of `age` to change from a number to a string.

### TypeScript

```typescript
let age: number = 19;

// age = "Aditya"; // ❌ Error
```

TypeScript detects this type of mistake before the program runs.

---

# ⚙️ How TypeScript Works

Web browsers cannot directly understand TypeScript.

Therefore, TypeScript code needs to be converted into JavaScript.

```text
TypeScript (.ts)
       ↓
TypeScript Compiler
       ↓
JavaScript (.js)
       ↓
Web Browser
```

This process is called **compilation**.

---

# 🆚 TypeScript vs JavaScript

| Feature         | JavaScript            | TypeScript                 |
| --------------- | --------------------- | -------------------------- |
| Type System     | Dynamic               | Static                     |
| Error Detection | Mostly during runtime | Before running the program |
| File Extension  | `.js`                 | `.ts`                      |
| Browser Support | Directly supported    | Compiled into JavaScript   |
| Large Projects  | Can become difficult  | Easier to manage           |

---

# 🌟 Advantages of TypeScript

## 1. Static Type Checking

TypeScript helps us define the expected type of a variable.

```typescript
let name: string = "Aditya";
let age: number = 19;
```

---

## 2. Finds Errors Early

TypeScript can identify many mistakes while writing the code.

```typescript
let price: number = 100;

// price = "Hello"; // ❌ Error
```

---

## 3. Better Code Suggestions

TypeScript improves autocomplete and code suggestions in editors such as VS Code.

---

## 4. Easier for Large Projects

When a project has many files and developers, TypeScript makes the code easier to understand and maintain.

---

## 5. Works with JavaScript

Existing JavaScript knowledge is useful because JavaScript is the foundation of TypeScript.

---

# 🚀 Where is TypeScript Used?

TypeScript is commonly used with:

* React
* Angular
* Next.js
* Node.js
* Large web applications

---

# 💡 Simple TypeScript Example

```typescript
let studentName: string = "Aditya";
let age: number = 19;
let isStudent: boolean = true;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
```

### Output

```text
Name: Aditya
Age: 19
Student: true
```

---

# 📌 Important Points

* TypeScript is a superset of JavaScript.
* TypeScript adds static typing to JavaScript.
* TypeScript files usually use the `.ts` extension.
* Browsers run JavaScript, not TypeScript directly.
* TypeScript code is compiled into JavaScript.
* TypeScript helps find errors earlier.
