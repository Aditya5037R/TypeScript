# 📖 Chapter 12: Utility Types

## 🎯 Learning Objectives

In this chapter, you will learn:

* What Utility Types are.
* How `Partial` works.
* How `Required` works.
* How `Pick` works.
* How `Omit` works.
* How `Record` works.
* How `Readonly` works.
* How to use Utility Types in practical applications.

---

# 1️⃣ What Are Utility Types?

**Utility Types** are built-in TypeScript types that help us transform or modify existing types.

For example, imagine we have a `User` type:

```typescript
type User = {
    id: number;
    name: string;
    email: string;
};
```

Sometimes we may want:

* All properties to become optional.
* All properties to become required.
* Only selected properties.
* Some properties to be removed.
* All properties to become readonly.

Instead of creating new types manually, TypeScript provides Utility Types.

---

# 2️⃣ `Partial<Type>`

`Partial` makes **all properties optional**.

### Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
```

Now all properties are optional:

```typescript
const user: PartialUser = {
    name: "Aditya"
};
```

We do not need to provide `id` or `email`.

### Practical Example: Updating a User

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

function updateUser(user: User,updates: Partial<User>): User {
    return {
        ...user,
        ...updates
    };
}

const user: User = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com"
};

const updatedUser = updateUser(user, {
    name: "Rahul"
});

console.log(updatedUser);
```

`Partial` is useful when updating only some properties.

---

# 3️⃣ `Required<Type>`

`Required` makes **all properties required**.

### Example

```typescript
interface User {
    name: string;
    age?: number;
    email?: string;
}

type RequiredUser = Required<User>;
```

Normally, `age` and `email` are optional.

But with `Required<User>`, all properties become required.

```typescript
const user: RequiredUser = {
    name: "Aditya",
    age: 19,
    email: "aditya@example.com"
};
```

This will cause an error:

```typescript
// const user: RequiredUser = {
//     name: "Aditya"
// };
```

Because `age` and `email` are now required.

---

# 4️⃣ `Pick<Type, Keys>`

`Pick` creates a new type by selecting specific properties from an existing type.

### Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserProfile = Pick<User, "name" | "email">;
```

The new type contains only:

```text
name
email
```

Example:

```typescript
const profile: UserProfile = {
    name: "Aditya",
    email: "aditya@example.com"
};
```

### Why Use `Pick`?

Sometimes we do not want to expose all user information.

For example, a public profile may show:

* Name
* Email

But should not include:

* Password
* Internal ID

---

# 5️⃣ `Omit<Type, Keys>`

`Omit` creates a new type by removing selected properties.

### Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type PublicUser = Omit<User, "password">;
```

The `PublicUser` type contains:

* `id`
* `name`
* `email`

But does not contain:

* `password`

Example:

```typescript
const user: PublicUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com"
};
```

---

# 6️⃣ `Record<Keys, Type>`

`Record` helps us create an object type with specific keys and value types.

### Example

```typescript
type Role = "admin" | "student" | "teacher";

type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    student: ["read"],
    teacher: ["read", "write"]
};
```

Every key defined in `Role` must be present.

Each value must be a `string[]`.

---

# 7️⃣ `Readonly<Type>`

`Readonly` makes all properties readonly.

### Example

```typescript
interface User {
    id: number;
    name: string;
}

const user: Readonly<User> = {
    id: 1,
    name: "Aditya"
};
```

We cannot modify the properties:

```typescript
// user.name = "Rahul"; // ❌ Error
```

`Readonly` is useful when we want to prevent accidental changes to an object.

---

# 8️⃣ Combining Utility Types

Utility Types can also be combined.

### Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

We can first remove the password:

```typescript
type PublicUser = Omit<User, "password">;
```

Then make all remaining properties readonly:

```typescript
type ReadonlyPublicUser = Readonly<PublicUser>;
```

Now the object:

* Does not contain a password.
* Cannot be modified.

---

# 9️⃣ Utility Types Comparison

| Utility Type   | Purpose                                             |
| -------------- | --------------------------------------------------- |
| `Partial<T>`   | Makes all properties optional                       |
| `Required<T>`  | Makes all properties required                       |
| `Pick<T, K>`   | Selects specific properties                         |
| `Omit<T, K>`   | Removes specific properties                         |
| `Record<K, T>` | Creates an object with specific key and value types |
| `Readonly<T>`  | Makes all properties readonly                       |

---

# 🔟 Practical Example: Student Management System

Let's use multiple Utility Types with a `Student` interface.

```typescript
interface Student {
    id: number;
    name: string;
    email: string;
    age?: number;
    course: string;
}
```

### Partial Student

Useful for updating student information:

```typescript
type StudentUpdate = Partial<Student>;

const update: StudentUpdate = {
    course: "BCA"
};
```

### Required Student

All properties must be provided:

```typescript
type CompleteStudent = Required<Student>;

const student: CompleteStudent = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19,
    course: "BCA"
};
```

### Pick Student

Select only public information:

```typescript
type StudentProfile = Pick<
    Student,
    "name" | "course"
>;
```

### Omit Student

Remove sensitive or unnecessary information:

```typescript
type StudentWithoutEmail = Omit<
    Student,
    "email"
>;
```

### Readonly Student

Prevent modifications:

```typescript
type SavedStudent = Readonly<Student>;
```

---

# 💻 Complete Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    password: string;
}


// PARTIAL

type UserUpdate = Partial<User>;

const updateUser: UserUpdate = {
    name: "Rahul"
};


// REQUIRED

type CompleteUser = Required<User>;

const completeUser: CompleteUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19,
    password: "example"
};


// PICK

type UserProfile = Pick<
    User,
    "name" | "email"
>;

const profile: UserProfile = {
    name: "Aditya",
    email: "aditya@example.com"
};


// OMIT

type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com"
};


// RECORD

type Role = "admin" | "student";

type Permissions = Record<Role, string[]>;

const permissions: Permissions = {
    admin: ["read", "write", "delete"],
    student: ["read"]
};


// READONLY

const readonlyUser: Readonly<User> = {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    password: "example"
};

// readonlyUser.name = "Amit"; // ❌ Error
```

---

# 📌 Important Points

* Utility Types are built into TypeScript.
* `Partial` makes all properties optional.
* `Required` makes all properties required.
* `Pick` selects specific properties.
* `Omit` removes specific properties.
* `Record` defines objects with specific keys and value types.
* `Readonly` prevents properties from being modified.
* Utility Types reduce duplicate code and improve type safety.

