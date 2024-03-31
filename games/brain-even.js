import readlineSync from 'readline-sync';
import {
  successThreshold, greeting, analyzeResult, getRandomInt,
} from '../src/index.js';

export default () => {
  const player = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
  const number = getRandomInt(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isEvenNumber = (number % 2 === 0);

  if ((isEvenNumber && answer === 'yes') || (!isEvenNumber && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber ? 'yes' : 'no'}'.`);
    return false;
  }
  return true;
};
