# 📖 Chapter 11: Generics

## 🎯 Learning Objectives

In this chapter, you will learn:

* What generics are.
* Why generics are useful.
* Generic functions.
* Generic interfaces.
* Generic type aliases.
* Generic classes.
* Generic constraints.
* Multiple generic types.
* Default generic types.

---

# 1️⃣ What Are Generics?

**Generics** allow us to create reusable code that can work with different types while maintaining type safety.

For example, imagine a function that simply returns a value.

Without generics:

```typescript
function returnString(value: string): string {
    return value;
}

function returnNumber(value: number): number {
    return value;
}
```

This creates repeated code.

With generics:

```typescript
function identity<T>(value: T): T {
    return value;
}
```

Now the same function can work with different types:

```typescript
console.log(identity<string>("Hello"));
console.log(identity<number>(100));
```

`T` represents a type that will be provided when the function is used.

---

# 2️⃣ Generic Syntax

The basic syntax is:

```typescript
function functionName<T>(value: T): T {
    return value;
}
```

Here:

```text
<T>
```

is called a **generic type parameter**.

You can think of `T` as a placeholder for a type.

For example:

```typescript
identity<string>("Hello");
```

Here, `T` becomes `string`.

And:

```typescript
identity<number>(100);
```

Here, `T` becomes `number`.

---

# 3️⃣ Generic Functions

A generic function can accept and return different types safely.

```typescript
function getValue<T>(value: T): T {
    return value;
}
```

Usage:

```typescript
const name = getValue<string>("Aditya");
const age = getValue<number>(19);
const isStudent = getValue<boolean>(true);

console.log(name);
console.log(age);
console.log(isStudent);
```

---

# 4️⃣ Type Inference with Generics

TypeScript can often automatically detect the generic type.

Instead of:

```typescript
const name = getValue<string>("Aditya");
```

We can write:

```typescript
const name = getValue("Aditya");
```

TypeScript automatically understands that the type is `string`.

Similarly:

```typescript
const age = getValue(19);
```

TypeScript understands that the type is `number`.

---

# 5️⃣ Generics with Arrays

Generics are useful when working with arrays.

```typescript
function getFirstItem<T>(items: T[]): T {
    return items[0];
}
```

Usage:

```typescript
const firstNumber = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Aditya", "Rahul"]);

console.log(firstNumber);
console.log(firstName);
```

The function works with both numbers and strings.

---

# 6️⃣ Multiple Generic Types

A function can use more than one generic type.

```typescript
function combine<T, U>(value1: T, value2: U) {
    return {
        first: value1,
        second: value2
    };
}
```

Usage:

```typescript
const result = combine<string, number>(
    "Aditya",
    19
);

console.log(result);
```

The first value uses type `T`, and the second uses type `U`.

---

# 7️⃣ Generic Interfaces

Interfaces can also use generics.

```typescript
interface User<T> {
    id: T;
    name: string;
}
```

Now the `id` can have different types.

### Number ID

```typescript
const user1: User<number> = {
    id: 101,
    name: "Aditya"
};
```

### String ID

```typescript
const user2: User<string> = {
    id: "USER-101",
    name: "Rahul"
};
```

---

# 8️⃣ Generic Type Aliases

Type aliases can also use generics.

```typescript
type ApiResponse<T> = {
    success: boolean;
    data: T;
};
```

Now we can use different types for `data`.

```typescript
const userResponse: ApiResponse<string> = {
    success: true,
    data: "User data"
};
```

Or an object:

```typescript
const productResponse: ApiResponse<{
    name: string;
    price: number;
}> = {
    success: true,
    data: {
        name: "Laptop",
        price: 50000
    }
};
```

---

# 9️⃣ Generic Classes

Classes can also use generics.

```typescript
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
```

Usage:

```typescript
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getValue());
console.log(stringBox.getValue());
```

The same `Box` class works with multiple types.

---

# 🔟 Generic Constraints

Sometimes we want to limit the types that a generic can accept.

For example, this function needs an object with a `length` property:

```typescript
function getLength<T extends { length: number }>(
    value: T
): number {
    return value.length;
}
```

Now it can work with strings and arrays:

```typescript
console.log(getLength("TypeScript"));
console.log(getLength([10, 20, 30]));
```

Both strings and arrays have a `length` property.

---

# 1️⃣1️⃣ Generic Constraints with Interfaces

We can create an interface and use it as a constraint.

```typescript
interface HasName {
    name: string;
}

function displayName<T extends HasName>(
    person: T
): void {
    console.log(person.name);
}
```

Usage:

```typescript
displayName({
    name: "Aditya",
    age: 19
});
```

The object can have additional properties, but it must contain a `name`.

---

# 1️⃣2️⃣ Default Generic Types

We can provide a default type.

```typescript
interface Response<T = string> {
    data: T;
}
```

If no type is provided, `string` is used.

```typescript
const response: Response = {
    data: "Hello"
};
```

We can also provide another type:

```typescript
const numberResponse: Response<number> = {
    data: 100
};
```

---

# 💻 Complete Example

```typescript
// Generic Function
function identity<T>(value: T): T {
    return value;
}

console.log(identity("TypeScript"));
console.log(identity(100));


// Generic Array Function
function getFirstItem<T>(items: T[]): T {
    return items[0];
}

console.log(getFirstItem([10, 20, 30]));
console.log(getFirstItem(["Aditya", "Rahul"]));


// Multiple Generics
function combine<T, U>(value1: T, value2: U) {
    return {
        first: value1,
        second: value2
    };
}

console.log(combine("Aditya", 19));


// Generic Interface
interface User<T> {
    id: T;
    name: string;
}

const user: User<number> = {
    id: 101,
    name: "Aditya"
};

console.log(user);


// Generic Class
class Box<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box(100);
const stringBox = new Box("Hello");

console.log(numberBox.getValue());
console.log(stringBox.getValue());
```
---

# 📌 Important Points

* Generics create reusable and type-safe code.
* `<T>` is a generic type parameter.
* Generic functions can work with multiple types.
* TypeScript can infer generic types automatically.
* Multiple generic types can use `<T, U>`.
* Interfaces and type aliases can use generics.
* Classes can use generics.
* Constraints limit which types a generic can accept.
* Default generic types provide a fallback type.

