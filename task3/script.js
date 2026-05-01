// Level 1 – Functions Basics

// Task 1: Student Form Function
function studentForm(name, age, course) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Course: ${course}`);
}
studentForm("Naveen", 22, "MERN");



// Task 2: Calculator Function
function calc(a, b) {
    console.log(`addition: ${a + b}`);
    console.log(`subtraction: ${a - b}`);
    console.log(`multiplication: ${a * b}`);
}
calc(10, 5); // Example usage



// Task 3: Reusable Greeting
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Kamal");
greet("Praveen");
greet("Sai");



// 🟡 Level 2 – Return & Scope

// Task 4: Return Value
function square(num) {
    return num * num;
}
console.log(square(5)); // 25



// Task 5: Scope Check
function checkScope() {
    let secret = "javascript";
    console.log("Inside function: " + secret);
}
checkScope();

// console.log(secret); 
// We get an error: "ReferenceError: secret is not defined"



//  Level 3 – Spread / Rest

// Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];
let toys = [...boys, ...girls];
console.log(toys);


// Task 7: Unlimited Numbers
function sumAll(...nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    console.log(total);
}
sumAll(10, 20, 30, 40);



//  Level 4 – Destructuring

// Task 8: Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);



// Task 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
let { name, role } = emp;
console.log(`${name} ${role}`);



//  Level 5 – Real-Time Logic

// Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

const offer = offerGenerator();
console.log(offer.next().value); // 10% cashback
console.log(offer.next().value); // 20% cashback
console.log(offer.next().value); // 50% cashback
console.log(offer.next().value); // Try again
console.log(offer.next().value); // No more offers



//  Level 6 – Advanced

// Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(add(10)(20)(30));



// Task 12: Student Marks Analyzer
function marks(...nums) {
    let total = nums.reduce((sum, num) => sum + num, 0);
    let avg = total / nums.length;
    console.log(`Total = ${total}`);
    console.log(`Average = ${avg}`);
}
marks(80, 90, 70, 60);



//  Challenge Task (Real Company Level)
function register(name, role, ...skills) {
    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Skills: ${skills.join(" ")}`);
}
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
