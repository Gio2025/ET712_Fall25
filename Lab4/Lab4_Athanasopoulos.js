/*
George Athanasopoulos
Lab 4, Functions
Sept 9, 2025
*/

console.log("----- George Athanasopoulos-----")

//define a function to print a message


function msg(){
    console.log("Example 1")
    console.log("Hello World!")
}
//define a function to print from 3 to 1
function printCount(){
    console.log("Example 2")
    for(let n = 3; n > 0; n --)
        console.log(n)
}

//define a function that passed a username
function greeting(username){
    console.log("----- Example 3 -----")
    console.log(`Welcome to JS ${username}`)
}

//define a function that passes a username and print it in uppercase
function upperMessage(message){
        console.log("Example 4")

    let changeUpper = message.toUpperCase()
    console.log(changeUpper)
}

//define a function to simulate a snake eyes game
//pass two numbers to the function, and check if both numbers are '1'
function isSnakeEyes(dice1,dice2){
    console.log("Example 5")
    if(dice1 === 1 && dice2 === 1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Not Snake Eyes!")
    }
}

//define a function that returns the area of a rectangle
function areaRectangle(length,width){
    console.log("Example 6")
    return length*width
}

//define a function to check a temperature. If the tempurature is greater than 75, 
// returns "True", otherwise, it returns a "False".
function checkTempurature(temperature){
    if (temperature >= 75){
        return true
}
    else{
        return false
    }


}

//EXERCISE

console.log("----- EXERCISE -----")
function checkName(){
    let name = prompt("Enter Your Name")
    while(name === null || name === "" || !isNaN(name)){
      if(!isNaN(name) && name != null && name !== "") {
        name = prompt(`${name} is invalid! Enter a name again:`)
      } else {
        name = prompt("You forgot to enter your name. Enter a name again:")
      }     
        
    }
let upperName = name.toUpperCase();
console.log(`Welcome ${upperName} to the class!`)

}






