/*
George Athanasopoulos
Lab 8, Events
Oct 7th, 2025
*/
console.log("George Athanasopoulos")
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME!"){
        e.target.textContent = "Key was Pressed"
    }
    else{
        e.target.textContent = "PRESS ME!"
    }

    //toggle between classes in css
    e.target.classList.toggle("btnactive")
})

// Event Delegation
let list = document.querySelector("#list")
list.addEventListener("click",function(event){
    // check if clicked element is a <li> element
    if(event.target.tagName.toLowerCase()==="li"){
        // remove the clicked <li> element
        event.target.remove()
    }
})

// Prevent Default
const qcclink = document.querySelector(".qcclink")
qcclink.addEventListener("click", function(e){
    e.preventDefault()
    alert("QCC website is under maintenance")
})

//WINDOW EVENT
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click",function(){
    window.scrollBy(200,0)
})

//PHOTO GALLERY SCROLLING
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

// define a function to scroll the gallery by an image size
function scrollGallery(pixels){
    document.querySelector("div.gallery-container").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}
btnright.addEventListener("click", function(){
    scrollGallery(500)
})
btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})