/*
George Athanasopoulos
September 11th, 2025
Lab 5, more about functions, object
*/
console.log("George Athanasopoulos")

//EXAMPLE 1

//anonoymous function in a variable
let greet = function(username){
    console.log(`Welcome to function ${username}`)
}

console.log("----- Example 1: -----")

//arrow function
let greeting = (username)=>{
    console.log(`Welcome to function ${username}`)
}


//EXAMPLE 2

//default parameters
//randomly generated a number between 1 and 9
//function will pass the amount of time that a number will be generated
function rand_number(x=1){
    for(let n = 1; n <= x; n++){
        let num = Math.ceil(Math.random()*9)
        console.log(`${num}`)
    }
}

//EXAMPLE 3
//spread syntax ...
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`---- Example 3: Spread ----`)
console.log(`The maximum number is ${max_number}`)

//EXAMPLE 4
//create an object 'car'
const car ={
    //propterties
    type: "Fiat",
    model: "500",
    color: "White",

    //method
    car_description : function(){
        return `Car type = ${this.type}, car model = ${this.model}, car color = ${this.color}`
    }
}

//EXAMPLE 5
//create an object 'myMath' that will calculate the perimeter or the area of a rectangle
const myMath ={
    //methods
    perimeter : function(w=0,l=0){return (2*w)+(2*l)},
    area : function(w=0,l=0){return w*l}
    }

//EXAMPLE 6
const cat = {
    //properties
    name : "Mickey",
    color: "Black with white spots",
    breed: "unknown",

    //method 
    meow: ()=>{console.log("MEOW MEOW MEOW")}
}

//EXAMPLE 7
const hen ={
    //properties
    name: "Helen",
    eggCount: 0,

    //method
    layAnEgg(){this.eggCount++; return `${this.name} lays an egg`},
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }

    //EXAMPLE 8
    //try catch
}
function yell(message=""){
    console.log(message.toUpperCase().repeat(3))
}

//try-catch

    function yell(message=""){
        try{
        console.log(message.toUpperCase().repeat(3))
    }
    catch(error){
    console.log(error)
    console.log(`Please pass a string next time!`)
}
    }

// LAB EXERCISE 1
// Create an object mycalculator with 2 properties and 2 methods

const mycalculator = {
    
    message: "This is a calculator for square and cube",
    side: 2,

    
    area_square: function(){
        return Math.pow(this.side, 2)
    },

    
    volume_cube: function(){
        return Math.pow(this.side, 3)
    }
}


console.log("----- Lab Exercise 1: mycalculator -----")
console.log(mycalculator.message)
console.log(`Area of square = ${mycalculator.area_square()}`)
console.log(`Volume of cube = ${mycalculator.volume_cube()}`)

// LAB EXERCISE 2
// Function to safely access an object's property

function readProperty(obj, prop){
    try {
        return obj[prop]
    } catch(error){
        return "Error accessing property"
    }
}


console.log("----- Lab Exercise 2: readProperty -----")

let student = {
    name: "George",
    age: 22
}

console.log(readProperty(student, "name"))       
console.log(readProperty(null, "name"))          
console.log(readProperty(undefined, "age"))      



