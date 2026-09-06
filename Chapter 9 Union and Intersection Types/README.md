# 📖 Chapter 9: Union and Intersection Types

## 🎯 Learning Objectives

In this chapter, you will learn:

* What union types are.
* How to use the `|` operator.
* What intersection types are.
* How to use the `&` operator.
* Type narrowing.
* Union types with functions.
* Intersection types with objects.
* The differences between unions and intersections.

---

# 1️⃣ What is a Union Type?

A **union type** allows a variable to have one of multiple possible types.

The `|` symbol is used to create a union type.

### Syntax

```typescript
type TypeName = Type1 | Type2;
```

### Example

```typescript
let id: string | number;

id = 101;
id = "USER-101";
```

The variable `id` can contain either a `string` or a `number`.

---

# 2️⃣ Union Type Alias

We can create a reusable union type.

```typescript
type ID = string | number;

let userId: ID = 101;

userId = "USER-101";
```

---

# 3️⃣ Union Types with Literal Values

Union types are commonly used with specific literal values.

```typescript
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
```

Only these three values are allowed.

This will cause an error:

```typescript
// currentStatus = "completed"; // ❌ Error
```

---

# 4️⃣ Union Types with Functions

A function can accept different types of values.

```typescript
function printId(id: string | number): void {
    console.log("ID:", id);
}

printId(101);
printId("USER-101");
```

---

# 5️⃣ Type Narrowing

When a variable has multiple possible types, TypeScript may require us to check its type before performing a specific operation.

```typescript
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}
```

This process is called **type narrowing**.

### Why is it necessary?

Consider:

```typescript
let value: string | number;
```

TypeScript does not know whether `value` is currently a string or a number.

So, before using string-specific or number-specific operations, we need to check the type.

---

# 6️⃣ What is an Intersection Type?

An **intersection type** combines multiple types into one.

The `&` symbol is used to create an intersection.

### Syntax

```typescript
type NewType = Type1 & Type2;
```

The new type contains all properties from both types.

---

# 7️⃣ Basic Intersection Example

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

A `CollegeStudent` must contain all properties:

```typescript
const student: CollegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};
```

---

# 8️⃣ Intersection with Multiple Types

We can combine more than two types.

```typescript
type Person = {
    name: string;
};

type Student = {
    course: string;
};

type Employee = {
    company: string;
};

type WorkingStudent = Person & Student & Employee;

const user: WorkingStudent = {
    name: "Aditya",
    course: "BCA",
    company: "Tech Company"
};
```

The `WorkingStudent` object must contain properties from all three types.

---

# 9️⃣ Union vs Intersection

| Feature             | Union `|`                    | Intersection `&`            |
|---------------------|------------------------------|-----------------------------|
| Meaning             | One type OR another          | All types combined          |
| Symbol              | `|`                          | `&`                         |
| Example             | `string \| number`           | `Person & Student`          |
| Object requirements | Can follow one possible type | Must include all properties |

### Easy Way to Remember

```text
Union        → OR
Intersection → AND
```

For example:

```typescript
string | number
```

Means:

> A string OR a number.

While:

```typescript
Person & Student
```

Means:

> Person AND Student properties together.

---

# 🔟 Practical Example: User Roles

### Union Type

A user can have one of several roles:

```typescript
type Role = "admin" | "student" | "teacher";

let userRole: Role = "student";
```

### Intersection Type

We can combine multiple user structures:

```typescript
type Person = {
    name: string;
};

type LoginDetails = {
    username: string;
    password: string;
};

type User = Person & LoginDetails;
```

A `User` must have all properties:

```typescript
const user: User = {
    name: "Aditya",
    username: "aditya123",
    password: "example"
};
```

> In a real application, passwords should never be stored or logged as plain text.

---

# 💻 Complete Example

```typescript
// UNION TYPES

type ID = string | number;

type Status = "active" | "inactive" | "pending";

function displayUser(id: ID): void {
    console.log("User ID:", id);
}

function checkValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    } else {
        console.log("Double:", value * 2);
    }
}


// INTERSECTION TYPES

type Person = {
    name: string;
    age: number;
};

type Student = {
    course: string;
    college: string;
};

type CollegeStudent = Person & Student;


const student: CollegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA",
    college: "Example College"
};


// FUNCTION CALLS

displayUser(101);
displayUser("USER-101");

checkValue("TypeScript");
checkValue(25);

console.log(student);
```

---

# 📝 Practice Task

Create the following types:

### 1. `PaymentStatus`

Allow only:

* `"pending"`
* `"completed"`
* `"failed"`

### 2. `PaymentID`

Allow:

* `string`
* `number`

### 3. `Customer`

Include:

* Name
* Email

### 4. `Payment`

Include:

* Payment ID
* Amount
* Payment status

### 5. `CustomerPayment`

Create an intersection type combining:

```typescript
Customer & Payment
```

Create an object using the `CustomerPayment` type.

---

# 📌 Important Points

* Union types use the `|` symbol.
* Union means **OR**.
* Intersection types use the `&` symbol.
* Intersection means **AND**.
* Union types often require type narrowing.
* `typeof` is commonly used for narrowing primitive types.
* Intersection types combine the properties of multiple object types.
* Union types are useful when a value can have different possible types.

---

## ✅ Chapter Status

**Status:** Completed

**Next Chapter:** Chapter 10 - Enums
