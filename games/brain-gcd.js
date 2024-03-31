import readlineSync from 'readline-sync';
import {
  successThreshold, greeting, analyzeResult, getRandomInt,
} from '../src/index.js';

export default () => {
  const player = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    if (playRound()) {
      successAttempts += 1;
    } else {
      break;
    }
  }

  analyzeResult(successAttempts, player);
};

const playRound = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  const givenNumbers = `${firstNumber} ${secondNumber}`;
  const expectedResult = getResult(firstNumber, secondNumber);

  console.log(`Question: ${givenNumbers}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === `${expectedResult}`) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'.`);
    return false;
  }
  return true;
};

const getResult = (firstNumber, secondNumber) => {
  const maxDelimeter = Math.min(firstNumber, secondNumber);
  let iteration = 1;

  let delimeter = maxDelimeter / iteration;

  while (delimeter > 1) {
    if (maxDelimeter % iteration === 0) {
      if (firstNumber % delimeter === 0 && secondNumber % delimeter === 0) {
        return delimeter;
      }
    }
    iteration += 1;
    delimeter = maxDelimeter / iteration;
  }
  return 1;
};
