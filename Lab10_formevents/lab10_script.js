console.log("George Athanasopoulos")
// collect the elements
let myform = document.querySelector("#form1")
let greeting = document.querySelector(".greeting")
let displayusername = document.querySelector(".display_username")

// collect data within the form
myform.addEventListener("submit", function(event){
    event.preventDefault()

    // collect the data
    let usernameInput = document.querySelector("#username")
    let usernameValue = usernameInput.value

    if(usernameValue.trim() ===""){
        alert("Please enter a username")
        return;
    }

    // after the validation passes, the data is sent to server
    // in html, after the validation, the greeting message will display with username
    greeting.style.display = "block"
    displayusername.textContent = usernameValue

    // clear the username text field
    usernameInput.value =""

    // submit the form after validation
    myform.submit()
    
})

let btnsubmit = document.querySelector(".btnsubmit")
window.addEventListener("load", function(){
    btnsubmit.disabled = true
})

let username_error_msg = document.querySelector(".username_error_msg")
let usernameInput = document.querySelector("#username")
usernameInput.addEventListener("input", function(){
    usernameValue = usernameInput.value
    usernameValueLength = usernameValue.length
    if(usernameValueLength >=5 && usernameValueLength<20){
        username_error_msg.textContent = ""
        btnsubmit.disabled = false
        usernameInput.classList.add("active_input_valid")
        
    }
    else if(usernameValueLength==20){
        username_error_msg.textContent = "username can't be 20+ characters"
    }
    else{
        username_error_msg.textContent = "username must be between 5 and 20 characters"
        btnsubmit.disabled = true
        usernameInput.classList.remove("active_input_valid")
        usernameInput.classList.add("active_input_invalid")
    }
})

// October 21, 2023
// collect the element
const inputpassword = document.querySelector('#password')
// add a focus event to the input
inputpassword.addEventListener("focus", function(){
    inputpassword.classList.add("active_input_valid")
})
// add a blur event to an input 
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_invalid")
})

// shuffled word 
const originalWord = "javascript"

// function to shuffle the original word
function shuffleword(word){
    return word
    .split("")
    .sort(function(){ return Math.random() - 0.5 }) // minor fix here for proper shuffling
    .join("")
}

// ✅ FIXED: collect the element BEFORE setting textContent
const scrambleword = document.querySelector("#shuffledword")

// ✅ FIXED: use correct function name
const shuffled = shuffleword(originalWord)
scrambleword.textContent = shuffled

// collect the elements
const guessInput = document.querySelector("#guessInput")
const wordfeedback = document.querySelector("#wordfeedback")

// add the input event
guessInput.addEventListener("input", function(){
    // collect characters typed in the input without whitespace and converted to lowercase
    const guess = guessInput.value.trim().toLowerCase()

    if(guess === originalWord){
        wordfeedback.textContent = "Correct!";
        guessInput.classList.add("active_input_valid")
    }
    else{
        wordfeedback.textContent = "Try again!";
        guessInput.classList.remove("active_input_valid")
        guessInput.classList.add("active_input_invalid")
    }
})
