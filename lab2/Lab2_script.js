console.log("Lab 2 by George Athanasopoulos")
console.log("\n----- Example 1: Array -----")
//create and initialize an array
let fruits = ["apple" , "orange", "grapes", "kiwi", "pineapple"]
console.log(`The 3rd fruit = ${fruits[2]}.`)
console.log(`There is/are ${fruits.length} fruit/s in the array.`)
//remove the 1st element in array fruits using the method 'shift()'
console.log(`original array ${fruits}`)
fruits.shift()
console.log(`Remove the 1st element in array fruits = ${fruits} `)
//add elements to the start(left) of an array
fruits.unshift(25,"Mango", true)
console.log(`Updated array with 3 new elements = ${fruits}`)
//add elements to the end(right) of an array
fruits.push("Peter", 100,)
console.log(`Updated array with two new elements to the right/at the end = ${fruits}`)
//find the index of an element
let index_blueberries = fruits.indexOf("blueberries")
console.log(`What is the index of blueberries? ${index_blueberries}`)
//if the return index = -1, then the element does not exist in the array
let index_Peter = fruits.indexOf("Peter")
console.log(`What is the index of 'Peter'? ${index_Peter}`)

console.log("\n----- Example 2: IF Statement -----")
//if statement is used to check if a conditional statement is TRUE. IF it is TRUE, then the program will run  the lines in between the curly braces. 
let day = true
let night = false

//check if it is day time
if(day){
console.log("Good morning!")
}
console.log('END')

console.log("\n----- Example 3: IF statement with logical operators -----")

let n1 = 10 //numerical data type
let n2 = "10" //string data type
//check if n1 is equal to n2
if(n1==n2){
    console.log(`n1 is equal to n2 --> ${n1==n2}`)
}
console.log("END 2")
//check if n1 is EXACTLY equal to n2
if(n1==n2){
    console.log(`n1 is exactly equal to n2 --> ${n1===n2}`)
}
console.log("END 3")

console.log("\n----- Example 4: Check if a number is even or odd -----")
//if-else check for two conditions
let number = 10
if(number%2 === 0){
    console.log(`${number} is EVEN`)
}
else{
    console.log(`${number} is ODD`)
}
console.log("END 4")

console.log("\n----- Example 5: Check if an input is a string or a number -----")
let user_input = prompt("Enter a username: ")
let check_username = isNaN(parseFloat(user_input))
console.log(`${user_input} is not a number? ${check_username}`)
if(check_username){
    console.log(`${user_input} is a STRING`)
}
else{
    console.log(`${user_input} is a NUMBER`)
}

console.log("\n----- Example 6: Multiway Conditional Statement -----")
let num1 = 9
let num2 = 20
if(num1 === num2){
    console.log(`num1 is EXACTLY EQUAL to num2`)
}
else if(num1>num2){
    console.log("num1 is Greater than num2")
}
else if(num1<num2){
    console.log("num1 is Less than num2")
}
else{
    console.log("ERROR: unable to compare")
}

console.log("\n----- Example 7: Switch Statement -----")
let gender = prompt("Enter a gender")
switch(gender){
    case "Female":
        console.log("Selected gender = FEMALE")
        break
    case "Male": 
        console.log("Selected gender = MALE")
        break
    case "OTHER": 
        console.log("Selected gender = OTHER")
        break
    default: 
        console.log("ERROR: unable to read the selected gender")
}

console.log("\n-----  EXERCISE 1   -----")

let value = prompt("Enter a value (string or number):")
let numValue = Number(value)
if (!isNaN(numValue)) {
    if (numValue > 0) {
        console.log(`${numValue} is a positive number.`)
    } else if (numValue < 0) {
        console.log(`${numValue} is a negative number.`)
    } else {
        console.log(`The number is zero.`)
    }
} else {
    console.log(`${value} is a string.`)
}
console.log("\n-----  EXERCISE 2   -----")

let colors = ["red", "green", "orange", "olive", "magenta"]
let userColor = prompt("Enter a color:").toLowerCase()
switch(userColor) {
    case "red":
    case "green":
    case "orange":
    case "olive":
    case "magenta":
        console.log(`You selected ${userColor} color.`)
        break
    default:
        console.log("Color is not in the list!")
}








