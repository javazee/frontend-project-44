import readlineSync from 'readline-sync';
import {
  successThreshold, greeting, analyzeResult, getRandomInt, getRandomFromArray,
} from '../src/index.js';

export default () => {
  const player = greeting();

  console.log('What is the result of the expression?');

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
  const leftOperand = getRandomInt(100);
  const rightOperand = getRandomInt(10);
  const operator = getRandomFromArray(['+', '-', '*']);
  const expression = `${leftOperand} ${operator} ${rightOperand}`;
  const expectedResult = getResult(leftOperand, operator, rightOperand);

  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === `${expectedResult}`) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'.`);
    return false;
  }
  return true;
};

const getResult = (left, operator, right) => {
  if (operator === '+') {
    return left + right;
  } if (operator === '-') {
    return left - right;
  }
  return left * right;
};
