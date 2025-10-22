// create a mock database
const takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

// collect the elements
const userinput = document.querySelector(".userinput");
const feedbackmessage = document.querySelector(".feedbackmessage");
const myform = document.querySelector(".myform");
const submitbtn = document.querySelector(".submitbtn");

// input event to validate username as user types
userinput.addEventListener("input", function() {
  const typedUsername = userinput.value.toLowerCase().trim();

  if (typedUsername.length === 0) {
    feedbackmessage.textContent = "";
    submitbtn.disabled = true;
  } else if (takenUsernames.includes(typedUsername)) {
    feedbackmessage.textContent = "Username is taken";
    feedbackmessage.style.color = "crimson";
    submitbtn.disabled = true;
  } else {
    feedbackmessage.textContent = "Username is available";
    feedbackmessage.style.color = "green";
    submitbtn.disabled = false;
  }
});

// submit event listener to prevent invalid form submission
myform.addEventListener("submit", function(event) {
  const typedUsername = userinput.value.toLowerCase().trim();

  if (typedUsername.length === 0 || takenUsernames.includes(typedUsername)) {
    event.preventDefault(); // stop form submission
    alert("Please enter a valid and available username before registering.");
  }
});
