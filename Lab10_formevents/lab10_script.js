console.log("George Athanasopoulos")
// collect the elements
let myform = document.querySelector(".myform")
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
    if(usernameValueLength >=5){
        username_error_msg.textContent = ""
        btnsubmit.disabled = false
        
    }
    else{
        username_error_msg.textContent = "username must be between 5 and 20"
        btnsubmit.disabled = true

    }
})