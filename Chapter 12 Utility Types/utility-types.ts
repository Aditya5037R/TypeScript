
// ==========================================
// BASE INTERFACE
// ==========================================

interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    password: string;
}

// ==========================================
// 1. PARTIAL
// ==========================================

// All User properties become optional
type UserUpdate = Partial<User>;

const userUpdate: UserUpdate = {
    name: "Rahul"
};


console.log("Partial User:", userUpdate);


// ==========================================
// 2. REQUIRED
// ==========================================

// All User properties become required
type CompleteUser = Required<User>;

const completeUser: CompleteUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19,
    password: "example"
};

console.log("\nRequired User:", completeUser);


// ==========================================
// 3. PICK
// ==========================================

// Select only name and email
type UserProfile = Pick<User,"name" | "email">;

const profile: UserProfile = {
    name: "Aditya",
    email: "aditya@example.com"
};

console.log("\nUser Profile:", profile);


// ==========================================
// 4. OMIT
// ==========================================

// Remove password from User

type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    age: 19
};

console.log("\nPublic User:", publicUser);


// ==========================================
// 5. RECORD
// ==========================================

type Role = "admin" | "student" | "teacher";

// Each role must have an array of permissions
type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    student: ["read"],
    teacher: ["read", "write"]
};

console.log("\nRole Permissions:", permissions);


// ==========================================
// 6. READONLY
// ==========================================

// All User properties become readonly
type SavedUser = Readonly<User>;

const savedUser: SavedUser = {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    password: "example"
};

console.log("\nReadonly User:", savedUser);

// savedUser.name = "Amit"; // ❌ Error


// ==========================================
// 7. PRACTICAL EXAMPLE - PRODUCT
// ==========================================

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    category: string;
}


// Partial Product for updates
type ProductUpdate = Partial<Product>;

const productUpdate: ProductUpdate = {
    price: 49999
};


// Required Product
type CompleteProduct = Required<Product>;

const completeProduct: CompleteProduct = {
    id: 101,
    name: "Laptop",
    price: 50000,
    description: "A powerful laptop",
    category: "Electronics"
};


// Pick selected properties
type ProductPreview = Pick<Product,"name" | "price">;

const preview: ProductPreview = {
    name: "Laptop",
    price: 50000
};


// Omit ID
type ProductWithoutID = Omit<Product, "id">;

const newProduct: ProductWithoutID = {
    name: "Keyboard",
    price: 1500,
    category: "Electronics"
};


// Record for categories
type Category = "electronics" | "clothing" | "books";

type ProductCategories = Record<Category, string>;

const categories: ProductCategories = {
    electronics: "Electronic devices and accessories",
    clothing: "Clothes and fashion products",
    books: "Books and educational materials"
};


// Readonly Product
type SavedProduct = Readonly<Product>;

const savedProduct: SavedProduct = {
    id: 102,
    name: "Mouse",
    price: 800,
    category: "Electronics"
};

console.log("\nProduct Update:", productUpdate);
console.log("Complete Product:", completeProduct);
console.log("Product Preview:", preview);
console.log("New Product:", newProduct);
console.log("Categories:", categories);
console.log("Saved Product:", savedProduct);



// output

// Partial User: { name: 'Rahul' }

// Required User: {
//   id: 1,
//   name: 'Aditya',
//   email: 'aditya@example.com',
//   age: 19,
//   password: 'example'
// }

// User Profile: { name: 'Aditya', email: 'aditya@example.com' }

// Public User: { id: 1, name: 'Aditya', email: 'aditya@example.com', age: 19 }

// Role Permissions: {
//   admin: [ 'read', 'write', 'delete' ],
//   student: [ 'read' ],
//   teacher: [ 'read', 'write' ]
// }

// Readonly User: {
//   id: 2,
//   name: 'Rahul',
//   email: 'rahul@example.com',
//   password: 'example'
// }

// Product Update: { price: 49999 }
// Complete Product: {
//   id: 101,
//   name: 'Laptop',
//   price: 50000,
//   description: 'A powerful laptop',
//   category: 'Electronics'
// }
// Product Preview: { name: 'Laptop', price: 50000 }
// New Product: { name: 'Keyboard', price: 1500, category: 'Electronics' }
// Categories: {
//   electronics: 'Electronic devices and accessories',
//   clothing: 'Clothes and fashion products',
//   books: 'Books and educational materials'
// }
// Saved Product: { id: 102, name: 'Mouse', price: 800, category: 'Electronics' }