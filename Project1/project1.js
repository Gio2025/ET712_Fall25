// --------------------- TOPIC BUTTONS ---------------------
const colorsBtn = document.querySelector("#colorsbtn");
const alphabetBtn = document.querySelector("#alphabetbtn");
const animalsBtn = document.querySelector("#animalsbtn");
const shapesBtn = document.querySelector("#shapesbtn");

// --------------------- TOPIC SECTIONS ---------------------
const colorsTopic = document.querySelector("#colorsTopic");
const alphabetTopic = document.querySelector("#alphabetTopic");
const animalsTopic = document.querySelector("#animalsTopic");
const shapesTopic = document.querySelector("#shapesTopic");

// --------------------- SHOW SECTIONS ---------------------
function showSection(section) {
  colorsTopic.style.display = "none";
  alphabetTopic.style.display = "none";
  animalsTopic.style.display = "none";
  shapesTopic.style.display = "none";
  section.style.display = "block";
  section.scrollIntoView({ behavior: "smooth" });
}

colorsBtn.addEventListener("click", () => showSection(colorsTopic));
alphabetBtn.addEventListener("click", () => showSection(alphabetTopic));
animalsBtn.addEventListener("click", () => showSection(animalsTopic));
shapesBtn.addEventListener("click", () => showSection(shapesTopic));

// --------------------- ALPHABET SECTION ---------------------
const alphabetWords = {
  A: "Apple",
  B: "Banana",
  C: "Cat",
  D: "Dog",
  E: "Elephant",
  F: "Fish",
  G: "Giraffe",
  H: "Horse",
  I: "Ice cream",
  J: "Juice",
  K: "Kite",
  L: "Lion",
  M: "Monkey",
  N: "Nest",
  O: "Orange",
  P: "Penguin",
  Q: "Queen",
  R: "Rabbit",
  S: "Sun",
  T: "Tiger",
  U: "Umbrella",
  V: "Violin",
  W: "Whale",
  X: "Xylophone",
  Y: "Yak",
  Z: "Zebra"
};

const letterButtons = document.querySelectorAll(".letter");
const letterWord = document.getElementById("letterWord");

letterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.textContent;
    const word = alphabetWords[letter];
    letterWord.textContent = `${letter} is for ${word}!`;

    // Optional: smooth scroll for alphabet display
    document.getElementById("alphabetDisplay").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// --------------------- SCROLL BUTTONS ---------------------
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// --------------------- ANIMAL MODAL ---------------------
const animalModal = document.getElementById("animalModal");
const animalImg = document.getElementById("animalImg");
const animalDesc = document.getElementById("animalDesc");
const closeModal = document.querySelector(".close");
const animalButtons = animalsTopic.querySelectorAll("button");

for (let btn of animalButtons) {
  btn.addEventListener("click", function() {
    const animal = this.textContent;
    const imagePath = "images/" + animal.toLowerCase() + ".jpg";
    animalImg.src = imagePath;
    animalDesc.textContent = "This is a " + animal + "!";
    animalModal.style.display = "block";
  });
}

closeModal.addEventListener("click", function() {
  animalModal.style.display = "none";
});

animalModal.addEventListener("click", function(event) {
  if (event.target === animalModal) {
    animalModal.style.display = "none";
  }
});

// --------------------- SHAPES SECTION ---------------------
const shapeButtons = document.querySelectorAll(".shape-btn");
const shapeImg = document.getElementById("shapeImg");
const shapeDesc = document.getElementById("shapeDesc");

for (let btn of shapeButtons) {
  btn.addEventListener("click", function() {
    shapeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const shape = btn.textContent;
    const shapePath = "images/" + shape.toLowerCase() + ".png";
    shapeImg.src = shapePath;
    shapeDesc.textContent = "This is a " + shape + "!";

    //  Smooth scroll to show shape image and text
    document.getElementById("shapeDisplay").scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// --------------------- WELCOME ---------------------
window.addEventListener("load", function() {
  alert("Welcome to Pre-K! Let's start learning and having fun!");
});
// --------------------- BACKGROUND COLOR ON SCROLL ---------------------
window.addEventListener("scroll", () => {
  // Get scroll position
  const scrollY = window.scrollY;

  // Change background color gradually based on scroll
  // Example: from light pink to crimson
  if (scrollY < 200) {
    document.body.style.backgroundColor = "rgb(235, 93, 105)"; // default
  } else if (scrollY >= 200 && scrollY < 400) {
    document.body.style.backgroundColor = "rgb(220, 50, 75)";
  } else if (scrollY >= 400 && scrollY < 600) {
    document.body.style.backgroundColor = "rgb(200, 20, 50)";
  } else {
    document.body.style.backgroundColor = "crimson";
  }
});
