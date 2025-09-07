/*
Homework 1: Control Flow and Loops
by George Athanasopoulos
*/

console.log("Program 1 ")

let user_input = prompt("Enter a number(Can be positive, negative, or 0):")

if(user_input === null){
    console.log("Null and Void!")
}
else if(user_input === ""){
    console.log("Your answer was blank!")
}
    else{
        let number = Number(user_input)
        if (isNaN(number)) {
        console.log("That's not a valid number!");
                            }
        else if(number > 0){
            console.log("Think positively!")

                            }
        else if(number < 0){
            console.log("Never have negative balance!")
                                }
        else{
            console.log("Yin and Yang!")
            }
 }




 console.log("Program 2")

 let numbers =[];

 for(let i = 0; i < 10; i++){
    let inputs = prompt(`Enter number ${i + 1} of 10`)
    let num = Number(inputs)
 
    numbers.push(num)
} 
console.log(numbers)

let count3 = 0;
let count5 = 0;
let count7 = 0;

for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num % 3 === 0){
        count3++;
    }
    if (num % 5 === 0) {
        count5++;
    }

    if (num % 7 === 0) {
        count7++;
    }
}
console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);



