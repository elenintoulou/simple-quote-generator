const quotes = [
  "Believe in yourself and all that you are.",
  "You are stronger than you think.",
  "Progress, not perfection.",
  "Keep going — you're doing great!",
  "Small steps every day lead to big results.",
  "Doubt kills more dreams than failure ever will.",
  "One day or day one. You decide.",
  "Your only limit is your mind.",
  "You don’t have to be perfect to be amazing.",
  "Discipline is choosing what you want most over what you want now.",
  "Success is the sum of small efforts repeated day in and day out.",
  "It always seems impossible until it’s done.",
  "Don't wait for motivation — create it.",
  "You’ve come this far — don’t stop now.",
  "Mistakes are proof that you're trying."
];

// connect with html and add a click sound when the user presses click

let clickSound = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");
let button = document.querySelector(".bt");
button.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let selectedQuote = quotes[randomIndex];

  // Now show it on the page:
  quoteDisplay.innerText = selectedQuote;
});



let quoteDisplay = document.querySelector(".quote");



