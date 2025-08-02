const USER_NUMBER_MIN_LIMIT = 1;
const USER_NUMBER_MAX_LIMIT = 100;
const MAX_ATTEMPTS = 10;

let ATTEMPTS_NUMBER;

function generateRandomNumber() {
    const randomNumber = Math.ceil(Math.random() * USER_NUMBER_MAX_LIMIT);

    return randomNumber;
}

function getPlayerGuess(message = `guess the evil AI's number! 😈🤖 (between ${USER_NUMBER_MIN_LIMIT} and ${USER_NUMBER_MAX_LIMIT}.)`) {
    if (ATTEMPTS_NUMBER >= MAX_ATTEMPTS) {
    return;
    }

    const userPrompt = prompt(message);

    if (userPrompt === null) {
        alert("You canceled the game.");
        return;
    }

    ATTEMPTS_NUMBER += 1;

    const userNumber = Number(userPrompt);

    if (
        isNaN(userNumber) ||
        userNumber < USER_NUMBER_MIN_LIMIT ||
        userNumber > USER_NUMBER_MAX_LIMIT
    ) {
        return getPlayerGuess();
    }

    return userNumber;
}

function checkGuess(userNumber, correctNumber) {
    if (userNumber > correctNumber) {
        return "too high";
    }

    if (userNumber < correctNumber) {
        return "too low";
    }

    return "correct";
}

function game() {
    ATTEMPTS_NUMBER = 0;
    let checkedGuessMessage;

    const randomNumber = generateRandomNumber();

    do {
        const userNumber = getPlayerGuess();

        if (typeof userNumber !== "number") {
        break;
    }

    checkedGuessMessage = checkGuess(userNumber, randomNumber);

    alert(checkedGuessMessage);

    if (checkedGuessMessage === "correct") {
        break;
    }
  } while (ATTEMPTS_NUMBER < MAX_ATTEMPTS);

    console.log(`game is ${checkedGuessMessage === "correct" ? "won" : "lost"}`);

    console.log(`attempts used: ${ATTEMPTS_NUMBER}`);
}
