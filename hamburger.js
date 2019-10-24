'use strict';

var width = window.innerWidth;
var navToggle = document.querySelector("#nav-toggle");
var navItems = document.querySelector("#nav-items");
var navFirstItem = document.querySelector("#nav-items a")
console.log(width);

checkMenu();

navToggle.addEventListener("click", function () {
    console.log("#nav-toggle has been clicked.");
    if (navItems.classList.contains("hidden")) {
        console.log("#nav-items are hidden, showing them now.");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");
        navToggle.setAttribute("aria-expanded", "true");
        
        navFirstItem.focus();
    } else {
        console.log("#nav-items are showing, hiding them now.");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

// while (true) {
// while (true) {
window.addEventListener("resize", checkMenu);
// }

// }

function checkMenu() {
    if (window.innerWidth < 500) {
        navToggle.classList.remove("hidden");
        navToggle.setAttribute("aria-hidden", "false");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
        navItems.setAttribute("aria-labelledby", "nav-toggle");
    } else {
        navToggle.classList.add("hidden");
        navToggle.setAttribute("aria-hidden", "true");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");
    }
    
}