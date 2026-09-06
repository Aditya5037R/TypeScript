// ==========================================
// 1. UNION TYPES
// ==========================================

// A variable can be a string OR number
type ID = string | number;

let userId: ID = 101;

console.log("User ID:", userId);

userId = "USER-101";

console.log("Updated User ID:", userId);


// ==========================================
// 2. LITERAL UNION TYPE
// ==========================================

type Status = "active" | "inactive" | "pending";

let currentStatus: Status = "active";

console.log("Status:", currentStatus);


// ==========================================
// 3. UNION TYPE WITH FUNCTION
// ==========================================

function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("String Value:", value.toUpperCase());
    } else {
        console.log("Number Value:", value * 2);
    }
}

displayValue("TypeScript");
displayValue(25);


// ==========================================
// 4. INTERSECTION TYPES
// ==========================================

type Person = {
    name: string;
    age: number;
};

type Student = {
    course: string;
    college: string;
};

// Combines Person AND Student
type CollegeStudent = Person & Student;

const student: CollegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA",
    college: "Example College"
};

console.log("\nCollege Student:");
console.log(student);


// ==========================================
// 5. PRACTICAL EXAMPLE
// ==========================================

type Customer = {
    name: string;
    email: string;
};

type Payment = {
    paymentId: string | number;
    amount: number;
    status: "pending" | "completed" | "failed";
};

// Combines Customer AND Payment
type CustomerPayment = Customer & Payment;

const payment: CustomerPayment = {
    name: "Aditya",
    email: "aditya@example.com",
    paymentId: "PAY-101",
    amount: 500,
    status: "completed"
};

console.log("\nCustomer Payment:");
console.log(payment);