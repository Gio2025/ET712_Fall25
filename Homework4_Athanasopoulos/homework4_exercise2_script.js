console.log("Homework 4 Gallery by George Athanasopoulos");

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const cards = document.querySelector(".cards");

const infoPanel = document.getElementById("info-panel");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

const cardWidth = 310; // card width + margin
const totalCards = 6;
const cardsPerPage = 3;

let currentIndex = 0;

function updateGallery() {
  const translateX = -(cardWidth * currentIndex);
  cards.style.transform = `translateX(${translateX}px)`;
}

btnRight.addEventListener("click", () => {
  currentIndex += cardsPerPage;
  if (currentIndex >= totalCards) {
    currentIndex = 0;
  }
  updateGallery();
});

btnLeft.addEventListener("click", () => {
  currentIndex -= cardsPerPage;
  if (currentIndex < 0) {
    currentIndex = totalCards - cardsPerPage;
  }
  updateGallery();
});

// Add click event to all Learn More buttons
learnMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the card containing this button
    const card = button.closest(".card");

    // Read data attributes
    const title = card.getAttribute("data-title");
    const extra = card.getAttribute("data-extra");

    // Update info panel content
    infoTitle.textContent = title;
    infoText.textContent = extra;

    // Show info panel
    infoPanel.style.display = "block";

    // Smooth scroll to info panel
    infoPanel.scrollIntoView({ behavior: "smooth" });
  });
});
