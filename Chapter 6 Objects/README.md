# 📖 Chapter 6: Objects

## 🎯 Learning Objectives

In this chapter, you will learn:

* What objects are.
* How to define object types.
* How to access and modify object properties.
* Optional properties.
* Readonly properties.
* Nested objects.
* Arrays of objects.

---

# 1️⃣ What is an Object?

An **object** is used to store related data using **key-value pairs**.

### Example

```typescript
let student = {
    name: "Aditya",
    age: 19,
    isStudent: true
};
```

In this example:

* `name` is a key.
* `"Aditya"` is its value.
* `age` stores a number.
* `isStudent` stores a boolean.

---

# 2️⃣ Accessing Object Properties

We can access object properties using dot notation.

```typescript
let student = {
    name: "Aditya",
    age: 19,
    isStudent: true
};

console.log(student.name);
console.log(student.age);
console.log(student.isStudent);
```

---

# 3️⃣ Object Type Annotations

In TypeScript, we can explicitly define the type of each property.

```typescript
let student: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Aditya",
    age: 19,
    isStudent: true
};
```

This ensures that each property has the correct type.

---

# 4️⃣ Modifying Object Properties

You can modify a property if it is not marked as `readonly`.

```typescript
let student: {
    name: string;
    age: number;
} = {
    name: "Aditya",
    age: 19
};

student.age = 20;

console.log(student);
```

---

# 5️⃣ Optional Properties

Sometimes an object property may not always be available.

Use `?` to make a property optional.

```typescript
let student: {
    name: string;
    age?: number;
} = {
    name: "Aditya"
};
```

The `age` property is optional.

You can also provide it:

```typescript
let anotherStudent: {
    name: string;
    age?: number;
} = {
    name: "Rahul",
    age: 20
};
```

---

# 6️⃣ Readonly Properties

A `readonly` property cannot be changed after the object is created.

```typescript
let user: {
    readonly id: number;
    name: string;
} = {
    id: 1,
    name: "Aditya"
};

user.name = "Rahul";

// user.id = 2; // ❌ Error
```

This is useful for values such as IDs that should not change.

---

# 7️⃣ Nested Objects

An object can contain another object.

```typescript
let student: {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    };
} = {
    name: "Aditya",
    age: 19,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

console.log(student.address.city);
```

---

# 8️⃣ Type Inference with Objects

TypeScript can automatically infer object property types.

```typescript
let student = {
    name: "Aditya",
    age: 19
};
```

TypeScript understands:

```text
name → string
age  → number
```

However, for larger or more complex objects, explicitly defining types can make the code easier to understand.

---

# 9️⃣ Array of Objects

We can create an array containing multiple objects.

```typescript
let students: {
    name: string;
    age: number;
}[] = [
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

Each object inside the array must follow the defined structure.

---

# 🔟 Looping Through an Array of Objects

```typescript
let students: {
    name: string;
    age: number;
}[] = [
    {
        name: "Aditya",
        age: 19
    },
    {
        name: "Rahul",
        age: 20
    }
];

for (let student of students) {
    console.log(student.name);
    console.log(student.age);
}
```

---

# 💻 Complete Example

```typescript
// Object with type annotations
let student: {
    readonly id: number;
    name: string;
    age: number;
    isStudent: boolean;
    email?: string;
} = {
    id: 1,
    name: "Aditya",
    age: 19,
    isStudent: true
};

console.log("Student:", student);

// Modifying allowed properties
student.age = 20;

console.log("Updated Age:", student.age);


// Nested Object
let user = {
    name: "Aditya",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

console.log("City:", user.address.city);


// Array of Objects
let students: {
    name: string;
    age: number;
}[] = [
    {
        name: "Aditya",
        age: 19
    },
    {
        name: "Rahul",
        age: 20
    }
];

for (let student of students) {
    console.log(student.name, "-", student.age);
}
```

---

# 📌 Important Points

* Objects store related data using key-value pairs.
* TypeScript allows us to define types for object properties.
* Use `?` to create optional properties.
* Use `readonly` for properties that should not change.
* Objects can contain nested objects.
* Arrays can contain multiple objects.
* TypeScript checks whether objects follow the required structure.

---
