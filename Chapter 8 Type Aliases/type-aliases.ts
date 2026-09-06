// 1. Primitive Type Alias
type StudentName = string;

let name: StudentName = "Aditya";

console.log("Name:", name);


// 2. Union Type Alias
type ID = number | string;

let userId: ID = 101;
console.log("User ID:", userId);

userId = "USER-101";
console.log("Updated User ID:", userId);


// 3. Literal Type Alias
type Status = "active" | "inactive";

let currentStatus: Status = "active";

console.log("Status:", currentStatus);


// 4. Object Type Alias
type Student = {
    readonly id: ID;
    name: string;
    age: number;
    course: string;
    status: Status;
    email?: string;
};


// 5. Creating Objects
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

console.log("\nStudent 1:", student1);
console.log("Student 2:", student2);


// 6. Intersection Type
type Person = {
    name: string;
    age: number;
};

type Course = {
    course: string;
};

type CollegeStudent = Person & Course;

const collegeStudent: CollegeStudent = {
    name: "Aditya",
    age: 19,
    course: "BCA"
};

console.log("\nCollege Student:", collegeStudent);


// 7. Function Type Alias
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

console.log("\nAddition:", add(10, 20));


// output
// Name: Aditya
// User ID: 101
// Updated User ID: USER-101
// Status: active

// Student 1: { id: 1, name: 'Aditya', age: 19, course: 'BCA', status: 'active' }
// Student 2: {
//   id: 'STU-002',
//   name: 'Rahul',
//   age: 20,
//   course: 'BCA',
//   status: 'inactive',
//   email: 'rahul@example.com'
// }

// College Student: { name: 'Aditya', age: 19, course: 'BCA' }

// Addition: 30