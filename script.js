const USER_NUMBER_MIN_LIMIT = 1;
const USER_NUMBER_MAX_LIMIT = 100;
const MAX_ATTEMPTS = 10;

function generateRandomNumber() {
  const randomNumber = Math.ceil(Math.random() * USER_NUMBER_MAX_LIMIT);

  return randomNumber;
}

function getPlayerGuess(
  message = `guess the evil AI's number! 😈🤖 (between ${USER_NUMBER_MIN_LIMIT} and ${USER_NUMBER_MAX_LIMIT}.)`
) {
  const userPrompt = prompt(message);

  if (userPrompt === null) {
    alert("You cancelled the game.\n\nRefresh the page to play 👾");
    return;
  }

  const userNumber = Number(userPrompt);

  if (isNaN(userNumber)) {
    alert("Please enter a valid number");
    return getPlayerGuess();
  } else if (
    userNumber < USER_NUMBER_MIN_LIMIT ||
    userNumber > USER_NUMBER_MAX_LIMIT
  ) {
    alert(
      `Please enter a number between ${USER_NUMBER_MIN_LIMIT} and ${USER_NUMBER_MAX_LIMIT}`
    );
    return getPlayerGuess();
  }

  return userNumber;
}

function checkGuess(userNumber, correctNumber) {
  if (userNumber > correctNumber) {
    return "high";
  }

  if (userNumber < correctNumber) {
    return "low";
  }

  return "correct";
}

function game() {
  let ATTEMPTS_NUMBER = 0;

  const randomNumber = generateRandomNumber();

  do {
    const userNumber = getPlayerGuess();

    if (typeof userNumber !== "number") {
      break;
    }

    ATTEMPTS_NUMBER += 1;

    const checkedGuess = checkGuess(userNumber, randomNumber);
    const remainingAttempts = MAX_ATTEMPTS - ATTEMPTS_NUMBER;

    if (remainingAttempts <= 0) {
      alert(
        `Better luck next time! You didn't guess the number correctly. The correct answer was ${randomNumber}\n\nRefresh the page to try again.`
      );
      break;
    }

    if (checkedGuess === "correct") {
      alert(
        `You Win! 👑 The correct answer was ${randomNumber}\n\nYou managed to guess the number in ${ATTEMPTS_NUMBER} attemps. ${generateAttemptsMessage(
          ATTEMPTS_NUMBER
        )}\n\nRefresh the page to play again! 👾`
      );
      break;
    } else if (checkedGuess === "high") {
      alert(
        `The number you've chosen is too high!\n\n${remainingAttempts} attempts remaining...`
      );
    } else {
      alert(
        `The number you've chosen is too low!\n\n${remainingAttempts} attempts remaining...`
      );
    }
  } while (ATTEMPTS_NUMBER < MAX_ATTEMPTS);
}

function generateAttemptsMessage(attempts) {
  switch (attempts) {
    case 1:
    case 2:
    case 3:
      return "WOW that was super speedy 🔥";
    case 4:
    case 5:
    case 6:
      return "Good job! 👍🏻";
    case 7:
    case 8:
    case 9:
      return "Close call, but you made it 🙌🏻";
    default:
      return "";
  }
}

alert(`Welcome to Number Guesser!\n\nAn Evil AI has taken over your webpage and requires you to guess a number betwen ${USER_NUMBER_MIN_LIMIT} - ${USER_NUMBER_MAX_LIMIT} or it will destroy the Earth!! 🌋\n\nyou have ${MAX_ATTEMPTS} attempts, or else the world is lost!\n\nEnter your whole number in the prompts to play once you close this message.\n\nGood luck web warrior... 🫡`);

game();
