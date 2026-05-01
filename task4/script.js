//task 1 :array basics
let arr1 = [10, 20, 30, 40, 50];

console.log(arr1[0]);                  // First element
console.log(arr1[arr1.length - 1]);    // Last element
console.log(arr1.length);              // Total length
//output:10
//50
//5

//task2:push&Pop
let arr2 = [1, 2, 3];

arr2.push(4, 5); // Add 4, 5 at end
arr2.pop();      // Remove last element

console.log(arr2);
//output:[1, 2, 3, 4]

//task 3:includes check
let arr3 = ["html", "css", "javascript", "react"];

console.log(arr3.includes("javascript"));
//output:true


//task 4:filter salaries
let emp = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 30000 }
];

let highEarners = emp.filter(employee => employee.salary > 20000);
console.log(highEarners);
//output:[
// { name: 'B', salary: 50000 },
// { name: 'C', salary: 30000 }
//]


//task 5:map names
let names = emp.map(employee => employee.name);
console.log(names);
//output:["A", "B", "C"]


//task 6:reduce sum
let totalSalary = emp.reduce((sum, employee) => sum + employee.salary, 0);
console.log(totalSalary);
//output:90000


//task7:remove duplicates
let arr7 = [1, 2, 2, 3, 4, 4, 5];

// Using Set to easily remove duplicates
let uniqueArr = [...new Set(arr7)];
console.log(uniqueArr);
//output:[1, 2, 3, 4, 5]


//Task 8: Find Largest Number
let arr8 = [10, 200, 5, 90];

// Using Math.max with spread operator
let largest = Math.max(...arr8);
console.log(largest);
//output:200


//Task 9: Reverse String WITHOUT reverse()
let str9 = "hello";
let reversedStr = "";

for (let i = str9.length - 1; i >= 0; i--) {
    reversedStr += str9[i];
}

console.log(reversedStr);
//output:olleh

//LEVEL 4 (Advanced Thinking)
//Task 10: Group by Salary
let emp10 = [
    { name: "A", salary: 10000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 10000 }
];

let grouped = emp10.reduce((acc, current) => {
    if (!acc[current.salary]) {
        acc[current.salary] = [];
    }
    acc[current.salary].push(current.name);
    return acc;
}, {});

console.log(grouped);
//output:{
// '10000': ["A", "C"],
// '50000': ["B"]
//}


//Task 11: Flatten Array (without flat)
let arr11 = [1, [2, [3, [4]]]];

function customFlatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(customFlatten(item)); // Recursive call
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(customFlatten(arr11));
//output:[1, 2, 3, 4]


//Task 12: Custom Sort (Descending)
let arr12 = [5, 2, 9, 1];

arr12.sort((a, b) => b - a);
console.log(arr12);
//output:[9, 5, 2, 1]


//Task 13: Find Second Largest

let arr13 = [10, 50, 20, 40];

// Sort in descending order and pick the second element
let sortedUnique = [...new Set(arr13)].sort((a, b) => b - a);
console.log(sortedUnique[1]);
//output:40


//Task 14: Count Characters
let str14 = "aabbccdde";
let charCount = {};

for (let char of str14) {
    charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount);
//output:{ a: 2, b: 2, c: 2, d: 2, e: 1 }



