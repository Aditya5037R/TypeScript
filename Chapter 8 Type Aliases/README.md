# 📖 Chapter 8: Type Aliases

## 🎯 Learning Objectives

In this chapter, you will learn:

* What type aliases are.
* How to create reusable types.
* Type aliases for primitive values.
* Type aliases for objects.
* Union types.
* Literal types.
* Type aliases with functions.
* The difference between `type` and `interface`.

---

# 1️⃣ What is a Type Alias?

A **type alias** allows us to create a custom name for a type.

Instead of repeatedly writing the same type, we can define it once and reuse it.

### Syntax

```typescript
type TypeName = type;
```

### Example

```typescript
type Name = string;

let studentName: Name = "Aditya";
```

Here, `Name` is an alias for the `string` type.

---

# 2️⃣ Type Alias for Primitive Types

We can create aliases for primitive types such as `string`, `number`, and `boolean`.

```typescript
type StudentName = string;
type StudentAge = number;
type StudentStatus = boolean;

let name: StudentName = "Aditya";
let age: StudentAge = 19;
let isStudent: StudentStatus = true;
```

Although aliases for simple types are not always necessary, they can make complex code easier to understand.

---

# 3️⃣ Type Alias for Objects

Type aliases are very useful for defining reusable object structures.

```typescript
type Student = {
    name: string;
    age: number;
    course: string;
};
```

Now we can reuse the `Student` type:

```typescript
let student1: Student = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};

let student2: Student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};
```

---

# 4️⃣ Optional Properties

Use `?` to make a property optional.

```typescript
type User = {
    name: string;
    age?: number;
};
```

Both of these objects are valid:

```typescript
let user1: User = {
    name: "Aditya"
};

let user2: User = {
    name: "Rahul",
    age: 20
};
```

---

# 5️⃣ Readonly Properties

Use `readonly` to prevent a property from being modified.

```typescript
type User = {
    readonly id: number;
    name: string;
};

let user: User = {
    id: 1,
    name: "Aditya"
};

user.name = "Rahul";

// user.id = 2; // ❌ Error
```

---

# 6️⃣ Union Types

A **union type** allows a value to have more than one possible type.

Use the `|` symbol.

```typescript
type ID = string | number;

let userId: ID = 101;

userId = "USER-101";
```

The `ID` type can contain either a `string` or a `number`.

---

# 7️⃣ Literal Types

A literal type restricts a value to specific values.

```typescript
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
```

Only these values are allowed:

```text
success
error
loading
```

This will cause an error:

```typescript
// currentStatus = "completed"; // ❌ Error
```

---

# 8️⃣ Combining Type Aliases

We can combine type aliases using intersection types.

```typescript
type Person = {
    name: string;
    age: number;
};

type Student = {
    course: string;
};

type CollegeStudent = Person & Student;
```

Now `CollegeStudent` requires all properties:

```typescript
let student: CollegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};
```

---

# 9️⃣ Type Alias for Functions

We can define the structure of a function using a type alias.

```typescript
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(10, 20));
```

The function must:

* Accept two numbers.
* Return a number.

---

# 🔟 Type Alias with Arrays

We can use a type alias with arrays of objects.

```typescript
type Student = {
    name: string;
    age: number;
};

let students: Student[] = [
    {
        name: "Aditya",
        age: 19
    },
    {
        name: "Rahul",
        age: 20
    }
];
```

Every object in the array must follow the `Student` structure.

---

# 🆚 Type Alias vs Interface

| Feature             | Type Alias | Interface       |
| ------------------- | ---------- | --------------- |
| Objects             | Yes        | Yes             |
| Primitive Types     | Yes        | No              |
| Union Types         | Yes        | No              |
| Intersection Types  | Yes        | Extends         |
| Can be extended     | Using `&`  | Using `extends` |
| Declaration merging | No         | Yes             |

### When to Use `interface`

Use an interface when:

* You are mainly defining the structure of objects.
* You want to extend object structures.
* You are working with classes or large applications.

### When to Use `type`

Use a type alias when:

* You need union types.
* You need literal types.
* You need tuples or complex types.
* You want to combine multiple types.

Both are commonly used in TypeScript.

---

# 💻 Complete Example

```typescript
// Union type
type ID = number | string;

// Literal type
type Status = "active" | "inactive";

// Object type
type Student = {
    readonly id: ID;
    name: string;
    age: number;
    course: string;
    status: Status;
    email?: string;
};

// Create student objects
const student1: Student = {
    id: 1,
    name: "Aditya",
    age: 19,
    course: "BCA",
    status: "active"
};

const student2: Student = {
    id: "STU-002",
    name: "Rahul",
    age: 20,
    course: "BCA",
    status: "inactive",
    email: "rahul@example.com"
};

console.log(student1);
console.log(student2);
```

---

# 📌 Important Points

* Type aliases create reusable custom types.
* Use the `type` keyword to create a type alias.
* Type aliases can represent primitive values.
* Type aliases can define object structures.
* Union types use the `|` symbol.
* Literal types restrict values to specific options.
* Intersection types use the `&` symbol.
* Type aliases can also define function types.
