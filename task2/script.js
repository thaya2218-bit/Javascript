
let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

// Task 1: 

for (let i = 0; i <= 1; i++) {
   console.log(
    students[i].name,
    students[i].mark,
    students[i].course
   )
    
}

//output1- 
//Naveen 85 MERN
//John 45 Python


//Task2-pass/fail

for(let i = 0; i <=1; i++){
    if(students[i].mark >= 50){
        console.log(students[i].name + " - Pass")
    } else {
        console.log(students[i].name + " - Fail")
    }
}

//Output2-
//Naveen - Pass
//John - Fail


//Task3-Gradesystem 

for(let i = 0; i < students.length; i++){
    if(students[i].mark >= 90){
        console.log(students[i].name + " - A Grade")
    } 
    else if(students[i].mark >= 75){
        console.log(students[i].name + " - B Grade")
    } 
    else if(students[i].mark >= 50){
        console.log(students[i].name + " - C Grade")
    } 
    else{
        console.log(students[i].name + " - Fail")
    }
}

//output3-
//Naveen - B Grade
//John - Fail
//Priya - C Grade
//Arun - A Grade

//Task4-To find highest mark student

let topper = students[0]

for(let i = 1; i < students.length; i++){
    if(students[i].mark > topper.mark){
        topper = students[i]
    }
}

console.log("Topper is " + topper.name + " - " + topper.mark)

//Output4-  Topper is Arun - 95


//Task5- Course Search

for(let i = 0; i < students.length; i++){
    if(students[i].course === "React"){
        console.log(
            students[i].id,
            students[i].name,
            students[i].mark,
            students[i].course
        )
    }
}

//Output5-  4 'Arun' 95 'React'

//Task6-Add new student


students.push({id:5, name:"Rahul", mark:88, course:"Node JS"})

for(let i = 0; i < students.length; i++){
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    )
}

//Output6-

//1 'Naveen' 85 'MERN'
//2 'John' 45 'Python'
//3 'Priya' 72 'Java'
//4 'Arun' 95 'React'
//5 'Rahul' 88 'Node JS'

//Task7-Switch(Attendance system)

let attendance = "present"

switch(attendance){
    case "present":
        console.log("Welcome")
        break

    case "absent":
        console.log("Mark Absent")
        break

    case "leave":
        console.log("Approved Leave")
        break

    default:
        console.log("Invalid Status")
}

//Output7-Welcome

//Task8-Login system

let username = "admin"
let password = "1234"

if(username === "admin" && password === "1234"){
    console.log("Login Success")
} else {
    console.log("Invalid User")
}

//Output8-Login Success