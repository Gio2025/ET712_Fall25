/*
George Athanasopoulos
Lab 7 - Intro to DOM
*/
console.log("George Athanasopoulos")
// access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)
// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)
//access(select) element by tag name
let heading1 = document.querySelector("h1")
console.log(heading1)

//access(select) all elements by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("Loop through each element in the node list")
for(let index=0; index<description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
} 

// collect(select) the elements 
let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add an event to each button
btn_square.addEventListener("click",function(){
    shape.className = "square"
    shape.textContent = "square".toUpperCase()
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "gold";
})

btn_circle.addEventListener("click",function(){
    shape.className = "circle"
    shape.textContent = "circle".toUpperCase()
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "hotpink";
})
btn_rectangle.addEventListener("click",function(){
    shape.className = "rectangle"
    shape.textContent = "rectangle".toUpperCase()
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "gray";
})

// September 30th
// event handler
let btnpress = document.querySelector(".btnpress")
btnpress.onclick = function(){alert(`${new Date()}`)}

// mouse events
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function(){circle_paragraph.textContent += " - CIRCLE - "}

// event listener
let box_color = document.querySelector(".box_color")

// function to randomly pick a color as a rgb value
const randomRGB = function(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
box_color.addEventListener("mouseout",function(){
    box_color.style.backgroundColor = randomRGB()
})

// key event
//collect the element 
let inputtext = document.querySelector(".inputtext")
let username_paragraph = document.querySelector(".username_paragraph")
inputtext.addEventListener("keydown", function(){
    username_paragraph.textContent = "Username MUST have 3+ characters"
})

// LAB EXERCISE
// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1")

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.addEventListener("mouseout", function(){
    ps1.textContent = "George Athanasopoulos"
})

// search for the second p with class ps2
let ps2 = document.querySelector(".ps2")

// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
ps2.addEventListener("click", function(){
    ps2.style.fontSize = "25px"
})

// search for the first div with class divs2
let divs2 = document.querySelector(".divs2")

// add a click event to change the background color to indigo
divs2.addEventListener("click",function(){
    divs2.style.backgroundColor = "indigo";
})

// search for the second div with class divs3
let divs3 = document.querySelector(".divs3")

// add a keydown event to change the width of divs2 to 300px
divs3.addEventListener("keydown", function(){
    divs3.style.width = "300px";
})