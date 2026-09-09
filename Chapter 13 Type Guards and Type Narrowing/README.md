# 📖 Chapter 13: Type Guards and Type Narrowing

## 🎯 Learning Objectives

In this chapter, you will learn:

* What type narrowing is.
* What type guards are.
* The `typeof` type guard.
* The `instanceof` type guard.
* The `in` operator type guard.
* Custom type guards.
* Discriminated unions.
* Exhaustive checking with `never`.

---

# 1️⃣ What is Type Narrowing?

**Type narrowing** means reducing a broad type into a more specific type.

Consider this example:

```typescript
let value: string | number;
```

The variable `value` can be either:

* `string`
* `number`

Before using string-specific methods such as `toUpperCase()`, TypeScript needs to know whether the current value is actually a string.

```typescript
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}
```

Inside the `if` block, TypeScript knows that `value` is a `string`.

Inside the `else` block, TypeScript knows that `value` is a `number`.

This process is called **type narrowing**.

---

# 2️⃣ What is a Type Guard?

A **type guard** is a check that helps TypeScript determine the type of a value at runtime.

Common type guards include:

* `typeof`
* `instanceof`
* `in`
* Custom type guard functions

---

# 3️⃣ The `typeof` Type Guard

The `typeof` operator is useful for checking primitive types.

```typescript
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    } else {
        console.log("Double:", value * 2);
    }
}
```

Usage:

```typescript
printValue("TypeScript");
printValue(50);
```

---

# 4️⃣ `typeof` with Multiple Types

We can narrow more than two possible types.

```typescript
function checkValue(
    value: string | number | boolean
): void {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    } else if (typeof value === "number") {
        console.log("Number:", value * 2);
    } else {
        console.log("Boolean:", value);
    }
}
```

Usage:

```typescript
checkValue("Hello");
checkValue(25);
checkValue(true);
```

---

# 5️⃣ The `in` Operator Type Guard

The `in` operator checks whether a property exists in an object.

Suppose we have two types:

```typescript
interface Student {
    name: string;
    course: string;
}

interface Teacher {
    name: string;
    subject: string;
}
```

Both have a `name` property.

We can check for a unique property:

```typescript
function displayPerson(
    person: Student | Teacher
): void {
    if ("course" in person) {
        console.log(`${person.name} studies ${person.course}`);
    } else {
        console.log(`${person.name} teaches ${person.subject}`);
    }
}
```

The `"course" in person` check helps TypeScript identify whether the object is a `Student`.

---

# 6️⃣ The `instanceof` Type Guard

The `instanceof` operator checks whether an object was created from a specific class.

```typescript
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
```

Usage:

```typescript
makeSound(new Dog());
makeSound(new Cat());
```

---

# 7️⃣ Custom Type Guards

We can create our own type guard functions.

A custom type guard uses the `is` keyword.

### Example

```typescript
interface Student {
    name: string;
    course: string;
}

interface Teacher {
    name: string;
    subject: string;
}

function isStudent(
    person: Student | Teacher
): person is Student {
    return "course" in person;
}
```

Now we can use it:

```typescript
function displayPerson(
    person: Student | Teacher
): void {
    if (isStudent(person)) {
        console.log(
            `${person.name} is studying ${person.course}`
        );
    } else {
        console.log(
            `${person.name} teaches ${person.subject}`
        );
    }
}
```

The function:

```typescript
person is Student
```

tells TypeScript that when the function returns `true`, `person` should be treated as a `Student`.

---

# 8️⃣ Discriminated Unions

A **discriminated union** uses a common property with fixed literal values to identify different object types.

Example:

```typescript
interface SuccessResponse {
    status: "success";
    data: string;
}

interface ErrorResponse {
    status: "error";
    message: string;
}

type ApiResponse =
    | SuccessResponse
    | ErrorResponse;
```

Both types have a `status` property.

We can use it to narrow the type:

```typescript
function handleResponse(
    response: ApiResponse
): void {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}
```

This is a very common pattern when working with APIs.

---

# 9️⃣ Equality Narrowing

TypeScript can also narrow types by comparing values.

```typescript
function compare(
    value1: string | number,
    value2: string
): void {
    if (value1 === value2) {
        console.log(
            "Both values are equal strings."
        );
    }
}
```

Inside the `if` block, TypeScript knows that `value1` must also be a `string`.

---

# 🔟 Truthiness Narrowing

TypeScript can narrow values based on whether they are truthy or falsy.

```typescript
function printName(name?: string): void {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Name not provided.");
    }
}
```

If `name` exists and is truthy, TypeScript treats it as a string.

---

# 1️⃣1️⃣ Exhaustive Checking with `never`

The `never` type can help ensure that every possible type in a union has been handled.

```typescript
type Shape =
    | {
          type: "circle";
          radius: number;
      }
    | {
          type: "square";
          side: number;
      };
```

Now create a function:

```typescript
function getArea(shape: Shape): number {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side ** 2;

        default:
            const exhaustiveCheck: never = shape;
            return exhaustiveCheck;
    }
}
```

If we add another shape to the `Shape` union but forget to handle it, TypeScript can report an error.

---

# 🆚 Type Guards vs Type Narrowing

| Type Guards                            | Type Narrowing                        |
| -------------------------------------- | ------------------------------------- |
| A check used to identify a type        | The result of reducing possible types |
| Examples: `typeof`, `in`, `instanceof` | Type becomes more specific            |
| Happens during code execution          | Helps TypeScript understand the value |

### Simple Example

```typescript
if (typeof value === "string") {
    value.toUpperCase();
}
```

Here:

* `typeof value === "string"` is the **type guard**.
* Inside the `if` block, treating `value` as a string is **type narrowing**.

---

# 💻 Complete Example

```typescript
interface Student {
    type: "student";
    name: string;
    course: string;
}

interface Teacher {
    type: "teacher";
    name: string;
    subject: string;
}

type Person = Student | Teacher;

function displayPerson(person: Person): void {
    switch (person.type) {
        case "student":
            console.log(
                `${person.name} studies ${person.course}`
            );
            break;

        case "teacher":
            console.log(
                `${person.name} teaches ${person.subject}`
            );
            break;
    }
}

const student: Student = {
    type: "student",
    name: "Aditya",
    course: "BCA"
};

const teacher: Teacher = {
    type: "teacher",
    name: "Rahul",
    subject: "TypeScript"
};

displayPerson(student);
displayPerson(teacher);
```

---

# 📌 Important Points

* Type narrowing reduces a broad type into a specific type.
* Type guards help TypeScript identify types.
* `typeof` is useful for primitive types.
* `in` checks for properties in objects.
* `instanceof` checks class instances.
* Custom type guards use the `is` keyword.
* Discriminated unions use a common literal property.
* `never` helps with exhaustive type checking.
