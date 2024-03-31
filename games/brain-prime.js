import readlineSync from 'readline-sync';
import {
  successThreshold, greeting, analyzeResult, getRandomInt,
} from '../src/index.js';

export default () => {
  const player = greeting();

  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

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
  const number = getRandomInt(20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isPrime = isPrimeNumber(number);

  if ((isPrime && answer === 'yes') || (!isPrime && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime ? 'yes' : 'no'}'.`);
    return false;
  }
  return true;
};

const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};
