let favNumber = 7; 
let guess = parseInt(prompt("Guess my favorite number:"));

while (guess !== favNumber) {
    if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
    guess = parseInt(prompt("Guess my favorite number:"));
}

console.log("You guessed it! My favorite number is " + favNumber);
