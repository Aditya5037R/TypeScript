// 1. Object with type annotations
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

console.log("Student Information:");
console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student:", student.isStudent);


// 2. Modifying an allowed property
student.age = 20;

console.log("\nUpdated Age:", student.age);


// 3. Nested Object
let user: {
    name: string;
    address: {
        city: string;
        state: string;
    };
} = {
    name: "Aditya",
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

console.log("\nAddress Information:");
console.log("City:", user.address.city);
console.log("State:", user.address.state);


// 4. Array of Objects
let students: {
    name: string;
    age: number;
    course: string;
}[] = [
    {
        name: "Aditya",
        age: 19,
        course: "BCA"
    },
    {
        name: "Rahul",
        age: 20,
        course: "BCA"
    },
    {
        name: "Amit",
        age: 21,
        course: "BCA"
    }
];

console.log("\nStudent List:");

for (let student of students) {
    console.log(
        "Name:", student.name,
        "| Age:", student.age,
        "| Course:", student.course
    );
}

// output
// Student Information:
// ID: 1
// Name: Aditya
// Age: 19
// Student: true

// Updated Age: 20

// Address Information:
// City: Pune
// State: Maharashtra

// Student List:
// Name: Aditya | Age: 19 | Course: BCA
// Name: Rahul | Age: 20 | Course: BCA
// Name: Amit | Age: 21 | Course: BCA