/*
George Athanasopoulos
September 14, 2025
Homework 2 - functions, loops, and conditional statement
*/

// Exercise 1: name_counting() function
function name_counting(namesArray) {
    let count = 0;
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i].length < 5) {
            count++;
        }
    }
    return count;
}

let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
console.log("Number of names with less than 5 characters:", name_counting(names));


// Exercise 2: checkNum() function
function checkNum() {
    while (true) {
        let input = prompt("Enter a number:");
        
        if (input === null || input.trim() === "") {
            alert("Input cannot be empty. Please enter a number.");
            continue;
        }

        let number = Number(input);

        if (!isNaN(number)) {
            return number % 2 === 0;
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }
}

let isEven = checkNum();
console.log("Is the number even?", isEven);