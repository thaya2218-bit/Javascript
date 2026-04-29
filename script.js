// 1️⃣ Create Student Data
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
];


// 📌 Task 1: Print All Students
console.log("Task 1:");
for(let s of students){
    console.log(s.id, s.name, s.mark, s.course);
}


// 📌 Task 2: Pass / Fail
console.log("\nTask 2:");
for(let s of students){
    if(s.mark >= 50){
        console.log(s.name + " - Pass");
    } else {
        console.log(s.name + " - Fail");
    }
}


// 📌 Task 3: Grade System
console.log("\nTask 3:");
for(let s of students){
    if(s.mark >= 90){
        console.log(s.name + " - A Grade");
    } else if(s.mark >= 75){
        console.log(s.name + " - B Grade");
    } else if(s.mark >= 50){
        console.log(s.name + " - C Grade");
    } else {
        console.log(s.name + " - Fail");
    }
}


// 📌 Task 4: Topper Student
console.log("\nTask 4:");
let topper = students[0];

for(let s of students){
    if(s.mark > topper.mark){
        topper = s;
    }
}
console.log("Topper is " + topper.name + " - " + topper.mark);


// 📌 Task 5: Course Search (React)
console.log("\nTask 5:");
for(let s of students){
    if(s.course === "React"){
        console.log(s);
    }
}


// 📌 Task 6: Add New Student
console.log("\nTask 6:");
students.push({id:5,name:"Rahul",mark:88,course:"Node JS"});

for(let s of students){
    console.log(s);
}


// 📌 Task 7: Attendance System
console.log("\nTask 7:");
let status = "present";

switch(status){
    case "present":
        console.log("Welcome");
        break;
    case "absent":
        console.log("Mark Absent");
        break;
    case "leave":
        console.log("Approved Leave");
        break;
    default:
        console.log("Invalid Status");
}


// 📌 Task 8: Login System
console.log("\nTask 8:");
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
} else {
    console.log("Invalid User");
