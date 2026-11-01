// 1. SEARCH GAMES

let searchInput = document.querySelector(".search-bar input");
let searchButton = document.querySelector(".search-bar button");
let cards = document.querySelectorAll(".game-card");

function searchGames() {

    let value = searchInput.value.toLowerCase();

    cards.forEach(function(card) {

        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

searchInput.addEventListener("input", searchGames);

searchButton.addEventListener("click", searchGames);


// 2. PLAY NOW BUTTON

let playButtons = document.querySelectorAll(".game-card button");

playButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Game is starting...");

    });

});


// 3. MOBILE HAMBURGER MENU

let menuButton = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// 4. NAVBAR SMOOTH SCROLL

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function(e) {

        let target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            navLinks.classList.remove("active");

        }

    });

});


// 5. EXPLORE GAMES BUTTON

let exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function() {

    document.querySelector("#games").scrollIntoView({
        behavior: "smooth"
    });

});