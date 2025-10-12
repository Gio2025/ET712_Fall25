const header = document.querySelector("#pageHeader");
const title = document.querySelector("#headerTitle");

// Track last scroll position
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 0 && currentScrollY > lastScrollY) {
        // User is scrolling down
        header.style.backgroundColor = "gray";
    } else if (currentScrollY === 0) {
        // Back at the top
        header.style.backgroundColor = "steelblue";
    }

    lastScrollY = currentScrollY;
});

// Resize event: change title color based on width
function updateTitleColor() {
    const width = window.innerWidth;

    if (width > 1000) {
        title.style.color = "blue";
    } else if (width > 700) {
        title.style.color = "green";
    } else if (width > 300) {
        title.style.color = "orange";
    } else {
        title.style.color = "black";
    }
}

// Initial check
updateTitleColor();

// Listen for resize
window.addEventListener("resize", updateTitleColor);
