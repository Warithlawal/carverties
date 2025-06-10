// Get DOM elements for navigation
const sidemenu = document.getElementById("sidemenu"),
    navOpen = document.getElementById("nav_open"),
    navClose = document.getElementById("nav_close"),
    overlay = document.getElementById("overlay"),
    body = document.body;

// Function to open the menu and handle overlay and scroll
function openmenu() {
    sidemenu.style.right = "0"; // Show the side menu
    if (overlay) overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    sidemenu.style.right = "-250px"; // Hide the side menu
    if (overlay) overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
}

// Event listeners
if (navOpen) navOpen.addEventListener('click', openmenu);
if (navClose) navClose.addEventListener('click', closemenu);
if (overlay) overlay.addEventListener('click', closemenu);
