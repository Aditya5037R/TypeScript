// 1. Reusable Address Interface
interface Address {
    city: string;
    state: string;
}

// 2. Base Person Interface
interface Person {
    readonly id: number;
    name: string;
    age: number;
}

// 3. Student extends Person
interface Student extends Person {
    course: string;
    email?: string;
    address: Address;
}

// 4. Creating Student Objects
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

const student3: Student = {
    id: 3,
    name: "Amit",
    age: 21,
    course: "BCA",
    address: {
        city: "Nashik",
        state: "Maharashtra"
    }
};

// 5. Array of Students
const students: Student[] = [
    student1,
    student2,
    student3
];

// 6. Display Student Information
for (const student of students) {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
    console.log("City:", student.address.city);

    if (student.email) {
        console.log("Email:", student.email);
    }

    console.log("-------------------");
}

// 7. Function Interface
interface Add {
    (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;

console.log("Addition:", add(10, 20));



// output
// ID: 1
// Name: Aditya
// Age: 19
// Course: BCA
// City: Pune
// -------------------
// ID: 2
// Name: Rahul
// Age: 20
// Course: BCA
// City: Mumbai
// Email: rahul@example.com
// -------------------
// ID: 3
// Name: Amit
// Age: 21
// Course: BCA
// City: Nashik
// -------------------
// Addition: 30