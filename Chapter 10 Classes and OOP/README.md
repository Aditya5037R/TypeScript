# 📖 Chapter 10: Classes and OOP

## 🎯 Learning Objectives

In this chapter, you will learn:

* What Object-Oriented Programming (OOP) is.
* What classes and objects are.
* How to create properties and methods.
* How constructors work.
* The `public`, `private`, and `protected` access modifiers.
* How to use `readonly`.
* How inheritance works.
* How to use the `super()` keyword.
* Method overriding.
* Encapsulation.
* Polymorphism.

---

# 1️⃣ What is OOP?

**Object-Oriented Programming (OOP)** is a programming approach where we organize code using **objects** and **classes**.

Real-world examples include:

* Student
* Car
* Bank Account
* Product
* User

Each object can have:

* **Properties** → Information or data
* **Methods** → Actions or behavior

For example, a `Student` may have:

```text
Properties:
- Name
- Age
- Course

Methods:
- Study
- Attend class
```

---

# 2️⃣ What is a Class?

A **class** is a blueprint for creating objects.

### Example

```typescript
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

The class defines the structure that objects should follow.

---

# 3️⃣ What is an Object?

An **object** is created from a class.

```typescript
const student1 = new Student("Aditya", 19);
```

Here:

* `Student` is the class.
* `student1` is an object.
* `new` creates a new object.

We can create multiple objects from the same class:

```typescript
const student1 = new Student("Aditya", 19);
const student2 = new Student("Rahul", 20);
```

---

# 4️⃣ Properties

Properties store information about an object.

```typescript
class Student {
    name: string;
    age: number;
}
```

These properties can be accessed using the object:

```typescript
console.log(student1.name);
console.log(student1.age);
```

---

# 5️⃣ Methods

Methods are functions inside a class.

```typescript
class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log("Hello, my name is " + this.name);
    }
}
```

Call the method using:

```typescript
const student = new Student("Aditya");

student.introduce();
```

---

# 6️⃣ Constructors

A **constructor** is a special method that automatically runs when a new object is created.

```typescript
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

When we create an object:

```typescript
const student = new Student("Aditya", 19);
```

The constructor automatically assigns the values.

---

# 7️⃣ The `this` Keyword

The `this` keyword refers to the current object.

```typescript
class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

Here:

```text
this.name
```

refers to the `name` property of the current object.

---

# 8️⃣ Access Modifiers

TypeScript provides access modifiers to control where properties and methods can be accessed.

The main access modifiers are:

* `public`
* `private`
* `protected`

---

## `public`

`public` properties can be accessed from anywhere.

```typescript
class Student {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const student = new Student("Aditya");

console.log(student.name);
```

`public` is the default access level.

---

## `private`

`private` properties can only be accessed inside the same class.

```typescript
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}
```

This will cause an error:

```typescript
// account.balance = 5000;
```

Instead, we use a method inside the class.

---

## `protected`

`protected` properties can be accessed:

* Inside the class.
* Inside classes that inherit from it.

```typescript
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    displayName(): void {
        console.log(this.name);
    }
}
```

---

# 9️⃣ `readonly` Properties

A `readonly` property cannot be modified after it is initialized.

```typescript
class User {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
```

This is not allowed:

```typescript
// user.id = 2;
```

But this is allowed:

```typescript
user.name = "Rahul";
```

---

# 🔟 Inheritance

Inheritance allows one class to reuse properties and methods from another class.

```typescript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log("My name is " + this.name);
    }
}

class Student extends Person {
    course: string;

    constructor(name: string, course: string) {
        super(name);
        this.course = course;
    }
}
```

`Student` inherits from `Person`.

---

# 1️⃣1️⃣ The `super()` Keyword

When a child class extends a parent class, `super()` is used to call the parent's constructor.

```typescript
class Person {
    constructor(public name: string) {}
}

class Student extends Person {
    constructor(name: string, public course: string) {
        super(name);
    }
}
```

The parent constructor must be called before using `this` in a derived class constructor.

---

# 1️⃣2️⃣ Method Overriding

A child class can provide its own version of a method from the parent class.

```typescript
class Person {
    introduce(): void {
        console.log("I am a person.");
    }
}

class Student extends Person {
    introduce(): void {
        console.log("I am a student.");
    }
}
```

The `Student` version overrides the `Person` version.

---

# 1️⃣3️⃣ Encapsulation

**Encapsulation** means protecting and controlling access to data.

For example, a bank account balance should not be directly modified from outside the class.

```typescript
class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}
```

The balance is controlled through methods.

---

# 1️⃣4️⃣ Polymorphism

**Polymorphism** means that the same method name can behave differently depending on the object.

```typescript
class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat meows");
    }
}
```

All classes use the same method name:

```text
makeSound()
```

But the behavior is different.

---

# 💻 Complete Example

```typescript
// Parent Class
class Person {
    constructor(
        public name: string,
        public age: number
    ) {}

    introduce(): void {
        console.log(`My name is ${this.name}`);
    }
}


// Child Class
class Student extends Person {
    constructor(
        name: string,
        age: number,
        public course: string
    ) {
        super(name, age);
    }

    study(): void {
        console.log(`${this.name} is studying ${this.course}`);
    }

    // Method overriding
    introduce(): void {
        console.log(
            `My name is ${this.name}, I am ${this.age} years old and I study ${this.course}.`
        );
    }
}


const student = new Student("Aditya", 19, "BCA");

student.introduce();
student.study();
```

---

# 📌 Important Points

* A class is a blueprint for creating objects.
* An object is an instance of a class.
* Properties store object data.
* Methods define object behavior.
* Constructors initialize objects.
* `this` refers to the current object.
* `public` members are accessible everywhere.
* `private` members are accessible only inside the class.
* `protected` members can also be accessed by child classes.
* `readonly` properties cannot be changed after initialization.
* `extends` is used for inheritance.
* `super()` calls the parent constructor.
* Method overriding allows child classes to change inherited behavior.
* Encapsulation protects internal data.
* Polymorphism allows the same method to have different behavior.

