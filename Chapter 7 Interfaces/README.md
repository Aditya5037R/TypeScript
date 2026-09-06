# 📖 Chapter 7: Interfaces

## 🎯 Learning Objectives

In this chapter, you will learn:

* What interfaces are.
* Why interfaces are useful.
* How to create and use interfaces.
* Optional properties.
* Readonly properties.
* Extending interfaces.
* Interfaces with functions.
* Interfaces with arrays of objects.

---

# 1️⃣ What is an Interface?

An **interface** defines the structure or shape that an object should follow.

Instead of writing the same object type repeatedly, we can create an interface and reuse it.

### Example

```typescript
interface Student {
    name: string;
    age: number;
    isStudent: boolean;
}
```

Now we can use this interface to create objects:

```typescript
let student: Student = {
    name: "Aditya",
    age: 19,
    isStudent: true
};
```

---

# 2️⃣ Why Use Interfaces?

Without an interface, we may repeat the same structure:

```typescript
let student1: {
    name: string;
    age: number;
} = {
    name: "Aditya",
    age: 19
};

let student2: {
    name: string;
    age: number;
} = {
    name: "Rahul",
    age: 20
};
```

With an interface:

```typescript
interface Student {
    name: string;
    age: number;
}

let student1: Student = {
    name: "Aditya",
    age: 19
};

let student2: Student = {
    name: "Rahul",
    age: 20
};
```

The code becomes cleaner and easier to maintain.

---

# 3️⃣ Creating an Interface

Use the `interface` keyword.

### Syntax

```typescript
interface InterfaceName {
    propertyName: type;
}
```

### Example

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}
```

---

# 4️⃣ Optional Properties

Use `?` to make an interface property optional.

```typescript
interface Student {
    name: string;
    age?: number;
}
```

Now both objects are valid:

```typescript
let student1: Student = {
    name: "Aditya"
};

let student2: Student = {
    name: "Rahul",
    age: 20
};
```

---

# 5️⃣ Readonly Properties

Use `readonly` when a property should not be changed after the object is created.

```typescript
interface User {
    readonly id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: "Aditya"
};

user.name = "Rahul";

// user.id = 2; // ❌ Error
```

---

# 6️⃣ Reusing an Interface

One interface can be used to create multiple objects.

```typescript
interface Student {
    name: string;
    age: number;
    course: string;
}

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

let student3: Student = {
    name: "Amit",
    age: 21,
    course: "BCA"
};
```

All objects must follow the `Student` structure.

---

# 7️⃣ Interface with Nested Objects

An interface can contain another object structure.

```typescript
interface User {
    name: string;
    address: {
        city: string;
        state: string;
    };
}

let user: User = {
    name: "Aditya",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};
```

For better reusability, we can create another interface:

```typescript
interface Address {
    city: string;
    state: string;
}

interface User {
    name: string;
    address: Address;
}
```

Now the `Address` interface can also be reused elsewhere.

---

# 8️⃣ Extending Interfaces

An interface can extend another interface.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    course: string;
}
```

Now a `Student` must contain:

* `name`
* `age`
* `course`

Example:

```typescript
let student: Student = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};
```

---

# 9️⃣ Interface with Functions

Interfaces can define the structure of a function.

```typescript
interface Add {
    (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(10, 20));
```

The function must accept two numbers and return a number.

---

# 🔟 Arrays of Objects Using Interfaces

Interfaces are very useful when working with arrays of objects.

```typescript
interface Student {
    name: string;
    age: number;
    course: string;
}

let students: Student[] = [
    {
        name: "Aditya",
        age: 19,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 20,
        course: "BCA"
    }
];
```

Every object inside the array must follow the `Student` interface.

---

# 🆚 Object Type vs Interface

| Object Type Annotation                  | Interface                                |
| --------------------------------------- | ---------------------------------------- |
| Can become repetitive                   | Reusable                                 |
| Difficult to maintain in large projects | Easier to maintain                       |
| Structure written directly              | Structure defined once                   |
| Good for small cases                    | Excellent for reusable object structures |

### Example

Without an interface:

```typescript
let user: {
    name: string;
    age: number;
};
```

With an interface:

```typescript
interface User {
    name: string;
    age: number;
}

let user: User;
```

---

# 💻 Complete Example

```typescript
// Reusable address structure
interface Address {
    city: string;
    state: string;
}

// Base interface
interface Person {
    readonly id: number;
    name: string;
    age: number;
}

// Student extends Person
interface Student extends Person {
    course: string;
    email?: string;
    address: Address;
}

const student1: Student = {
    id: 1,
    name: "Aditya",
    age: 19,
    course: "BCA",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

const student2: Student = {
    id: 2,
    name: "Rahul",
    age: 20,
    course: "BCA",
    email: "rahul@example.com",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

console.log(student1);
console.log(student2);
```

---

# 📌 Important Points

* Interfaces define the structure of objects.
* Interfaces make object structures reusable.
* Use `?` for optional properties.
* Use `readonly` for properties that should not change.
* Interfaces can contain nested interfaces.
* Interfaces can extend other interfaces.
* Interfaces can define function structures.
* Interfaces are useful for arrays containing similar objects.

