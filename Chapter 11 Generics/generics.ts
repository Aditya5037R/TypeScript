// ==========================================
// 1. GENERIC FUNCTION
// ==========================================
function identify<T>(value: T): T {
    return value;
}
console.log("String", identify("Aditya"));
console.log("Number", identify(21));
console.log("Boolean", identify(true));

// ==========================================
// 2. GENERICS WITH ARRAYS
// ==========================================

function getFirstItems<T>(items: T[]): T {
    return items[0];
}
const firstName = getFirstItems(["Aditya", "Rahul", "Jay"])
const firstNumber = getFirstItems([21, 19, 20])
console.log("First name: ", firstName);
console.log("First number: ", firstNumber);

// ==========================================
// 3. MULTIPLE GENERIC TYPES
// ==========================================
function combine<T,U>(value1:T,value2:U){
    return{
        first:value1,
        second:value2
    }
}
const combinedData=combine("Aditya",19)
const combinedData1=combine(19,"Aditya")
console.log("Combine Data",combinedData);
console.log("Combine Data",combinedData1);

// ==========================================
// 4. GENERIC INTERFACE
// ==========================================

interface Student<T> {
    id: T;
    name: string;
    course: string;
}

const student1: Student<number> = {
    id: 101,
    name: "Aditya",
    course: "BCA"
};

const student2: Student<string> = {
    id: "STU-102",
    name: "Rahul",
    course: "BCA"
};

console.log("\nStudent 1:", student1);
console.log("Student 2:", student2);


// ==========================================
// 5. GENERIC CLASS
// ==========================================

class Storage<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

const numberStorage = new Storage<number>(100);
console.log("\nNumber Storage:",numberStorage.getValue());
numberStorage.setValue(200);
console.log("Updated Number Storage:",numberStorage.getValue());

const stringStorage = new Storage<string>("Hello");
console.log("\nString Storage:",stringStorage.getValue());


// ==========================================
// 6. GENERIC CONSTRAINT
// ==========================================

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

console.log("\nString Length:",getLength("TypeScript"));
console.log("Array Length:",getLength([10, 20, 30, 40]));


// ==========================================
// 7. DEFAULT GENERIC TYPE
// ==========================================

interface ApiResponse<T = string> {
    success: boolean;
    data: T;
}

const messageResponse: ApiResponse = {
    success: true,
    data: "Data loaded successfully"
};

const numberResponse: ApiResponse<number> = {
    success: true,
    data: 100
};

console.log("\nMessage Response:", messageResponse);
console.log("Number Response:", numberResponse);



// output
// String Aditya
// Number 21
// Boolean true
// First name:  Aditya
// First number:  21
// Combine Data { first: 'Aditya', second: 19 }
// Combine Data { first: 19, second: 'Aditya' }

// Student 1: { id: 101, name: 'Aditya', course: 'BCA' }
// Student 2: { id: 'STU-102', name: 'Rahul', course: 'BCA' }

// Number Storage: 100
// Updated Number Storage: 200

// String Storage: Hello

// String Length: 10
// Array Length: 4

// Message Response: { success: true, data: 'Data loaded successfully' }
// Number Response: { success: true, data: 100 }