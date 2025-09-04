//student full name
//lab 3, loops
//Sept 4, 2025

console.log("George Athanasopoulos")
console.log(`\n----- Example 1: For loop as a counter -----`)
//for loop to print 0 to 5
for(let x = 0; x <= 5; x++){        //in other words, x=x+1 until it gets to 5
    console.log(x)
}

console.log(`\n----- Example 2: For loop with conditional statement -----`)
//print all even numbers between -20 and 20
for(let x = -20; x <= 20; x++){
    if(x%2 == 0){
        console.log(x)
    }
}

console.log(`\n----- Example 3: For loop as a decrement counter -----`)
//print from 3 to 0
for(let x = 3; x >= 0; x--){
    console.log(x)
}

console.log(`\n----- Example 4: For loop in an array   -----`)
let cars = ['Mazda', 'BMW', 'Tesla', 'Jeep', 'Honda']
for(let index = 0; index<cars.length; index++){
    console.log(cars[index])
}

for(let each of cars){
    console.log(each)
}

console.log(`\n----- Example 5: Applications using for loops   -----`)
//find how many car's names has more than 4 character
let car_counter = 0
for(let index = 0; index<cars.length; index++){
        if(cars[index].length > 4){
            car_counter ++
        }
}
console.log(`There is/are ${car_counter} car's name with 4+ characters`)

console.log(`\n----- Example 6:  -----`)
//ask the user to guess a number between 1 and 9. The user has three chances

let GUESS = 8

for(let counter = 1; counter <=3; counter++){
    let user_number = parseInt(prompt(`Enter a number between 1 and 9`))
    console.log(`User guess = ${user_number}`)

    if(user_number == GUESS){
        console.log(`Great! The number is ${GUESS}`)
        break
    }
    else if(user_number>GUESS){
        console.log(`Wrong! The number should be lower.`)
    }
    else if(user_number<GUESS){
        console.log(`Wrong! The number should be higher.`)
    }
    if(counter ===3){
        console.log(`Better luck next time`)
    }
    }

    console.log(`\n----- Example 7: While loop as a counter -----`)
//print from 0 to 5
let y = 0
while(y<=5){
    console.log(y)
    y++
}

console.log(`\n----- Example 8: Validate an Input -----`)
//check if the input number is between 1 and 9
let number = parseInt(prompt(`Enter a number between 1 and 9`))
//use while loop to recollect the number if the number is not between 1 and 9
while(number<1 || number >9){
    number = parseInt(prompt("ERROR: Enter a number between 1 and 9"))
}
console.log(`The collected number is ${number}`)

console.log(`\n----- Example 8: Simulate a bank transaction -----`)
let balance = 1000
while(true){
   
    user_transaction = parseInt(prompt("How can I help you today?\nPress 1 for account balance\nPress 2 for deposit\nPress 3 for withdraw\nPress 4 to Exit"))
    if (user_transaction < 1 || user_transaction > 2) {
        break
    }
    switch(user_transaction){
        case 1:
            console.log(`Your balance is ${balance}`)
            break

        case 2: 
            let deposit = parseInt(prompt("How much do you want to deposit?"))
            if (deposit>0){
                balance += deposit
                console.log(`Your new balance is ${balance}`)
            
            }
            else{
                console.log("ERROR!")
            }
            break
            default:
                console.log("Thank you for visiting QCC bank!")
        }
        }
