const LIMIT = 100;
const MAX_ATTEMPTS = 10;

function generateRandomNumber() {
    const r = Math.ceil(Math.random() * LIMIT);

    // for testing
    console.log("random number is:", r);
    return Math.ceil(Math.random() * LIMIT);
}

function checkGuess(randomNumber, userNumber) {
    console.log(randomNumber, userNumber);
    if (userNumber > randomNumber) return "too high";
    else if (userNumber < randomNumber) return "too low";
    else return "correct";
}

function getPlayerGuess(message = `guess the evil AI's number! 😈🤖 (between 1 and ${LIMIT}.)`) {
    const response = prompt(message);
    // 1. check string format first
    if (response === null) {
        // user has cancelled out of the box. Exit out of the loop
        alert("You've exited the game 👾.\n\nRefresh the page to play again.");
        return;
    } else if (response === "") {
        getPlayerGuess("Please enter a string.");
    }

    // 2. check number logic after that
    const guess = Number(response);

    if (isNaN(guess)) {
        getPlayerGuess("Please enter a valid string (It can only contain numbers.)")
    } else if (guess < 0 || guess > LIMIT){
        getPlayerGuess(`Your chosen number must be between 1 and ${LIMIT}.`);
    } else {
        return guess;
    }
}

function game() {
    /**
    todo:
    1. call Generate the random number.
     
    2. Initialize a counter for the number of attempts.
    3. Use a loop to repeatedly call getPlayerGuess.
        - use something like: 
    for (i = 0; i < 10; i++) {
        const guess = getPlayerGuess()
        
    }

    3.5. use checkGuess' string returns to write a message to the user.

    4. guess correctly or use up a maximum of 10 attempts.

    5. Print a message indicating whether the player has won or lost after
     the game ends.

    6. Print the number of attempts the player used.
     */
}

// this needs to happen in 'game' and be looped 10x times.
const randomNumber = generateRandomNumber();
const guess = getPlayerGuess();
const response = checkGuess(randomNumber, guess);
alert(`the number you've chosen is ${response}`);

// game(); we will call this function when we have written the logic