
let homeScore = 0;
let guestScore = 0;


let homeDisplay = document.getElementById("score-home");
let guestDisplay = document.getElementById("score-guest");

function add3pts(team) {
    if(team === "home") {
        homeScore += 3;
        homeDisplay.textContent = homeScore;
    }
    else if(team === "guest") {
        guestScore += 3;
        guestDisplay.textContent = guestScore;
    }
}

function add2pts(team) {
    if(team === "home") {
        homeScore += 2;
        homeDisplay.textContent = homeScore;
    }
    else if(team === "guest") {
        guestScore += 2;
        guestDisplay.textContent = guestScore;
    }
}

function add1pts(team) {
    if(team === "home") {
        homeScore += 1;
        homeDisplay.textContent = homeScore;
    }
    else if(team === "guest") {
        guestScore += 1;
        guestDisplay.textContent = guestScore;
    }
}

function reset() {
    homeScore = 0;
    guestScore = 0;

    homeDisplay.textContent = homeScore;
    guestDisplay.textContent = guestScore;
}