import readlineSync from 'readline-sync';
import {
  successThreshold, greeting, analyzeResult, getRandomInt,
} from '../src/index.js';

export default () => {
  const player = greeting();

  console.log('What number is missing in the progression?');

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
  const startElement = getRandomInt(100);
  const step = getRandomInt(10);
  const seriesOfNumber = [];
  const size = 10;
  const indexToHide = getRandomInt(size);

  let question = '';

  for (let i = 0; i < size; i += 1) {
    const number = startElement + (step * i);
    seriesOfNumber.push(number);
    if (indexToHide === i) {
      question += '.. ';
    } else {
      question += `${number} `;
    }
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === `${seriesOfNumber[indexToHide]}`) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${seriesOfNumber[indexToHide]}'.`);
    return false;
  }
  return true;
};
