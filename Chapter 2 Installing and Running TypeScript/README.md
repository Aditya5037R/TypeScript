# 📖 Chapter 2: Installing and Running TypeScript

## 🎯 Learning Objectives

In this chapter, you will learn:

* What is required to use TypeScript.
* How to install Node.js.
* How to install TypeScript.
* How to check the TypeScript version.
* How to create a TypeScript file.
* How to compile TypeScript into JavaScript.
* How to run a TypeScript program.

---

# 🛠️ Requirements

Before installing TypeScript, make sure that **Node.js** is installed on your computer.

Node.js includes **npm (Node Package Manager)**, which allows us to install TypeScript.

---

# 1️⃣ Check Node.js Installation

Open Terminal, Command Prompt, or PowerShell and run:

```bash
node -v
```

You can also check npm:

```bash
npm -v
```

If both commands show version numbers, Node.js and npm are installed correctly.

---

# 2️⃣ Install TypeScript

Install TypeScript globally using npm:

```bash
npm install -g typescript
```

After the installation is complete, check the TypeScript version:

```bash
tsc -v
```

Example output:

```text
Version 5.x.x
```

`tsc` stands for **TypeScript Compiler**.

---

# 3️⃣ Create Your First TypeScript File

Create a file named:

```text
hello.ts
```

Add the following code:

```typescript
let message: string = "Hello, TypeScript!";

console.log(message);
```

---

# 4️⃣ Compile TypeScript

Open the terminal inside the folder containing your `hello.ts` file.

Run:

```bash
tsc hello.ts
```

TypeScript will compile:

```text
hello.ts
```

into:

```text
hello.js
```

---

# 5️⃣ Run the JavaScript File

Use Node.js to run the generated JavaScript file:

```bash
node hello.js
```

Output:

```text
Hello, TypeScript!
```

---

# ⚙️ How TypeScript Works

```text
hello.ts
    ↓
TypeScript Compiler (tsc)
    ↓
hello.js
    ↓
Node.js
    ↓
Output
```

---

# 📂 File Extensions

| File    | Description              |
| ------- | ------------------------ |
| `.ts`   | TypeScript source file   |
| `.js`   | Compiled JavaScript file |
| `.json` | Configuration file       |

---

# 💡 Important Commands

### Check Node.js version

```bash
node -v
```

### Check npm version

```bash
npm -v
```

### Install TypeScript

```bash
npm install -g typescript
```

### Check TypeScript version

```bash
tsc -v
```

### Compile a TypeScript file

```bash
tsc filename.ts
```

### Run the compiled JavaScript file

```bash
node filename.js
```

---

# 📝 Practice Task

Create a file called `introduction.ts`.

Declare:

* Your name
* Your age
* Your course

Then compile and run the program.

Example:

```typescript
let name: string = "Aditya";
let age: number = 19;
let course: string = "BCA";

console.log(name);
console.log(age);
console.log(course);
```

---

# 📌 Important Points

* TypeScript requires the TypeScript compiler.
* TypeScript files use the `.ts` extension.
* The `tsc` command compiles TypeScript into JavaScript.
* Node.js can run the generated JavaScript file.
* Browsers and Node.js ultimately execute JavaScript.

