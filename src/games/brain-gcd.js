import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const k = firstNumber % secondNumber;
    return nod(secondNumber, k);
  }
  return firstNumber;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  const excpectedResult = `${nod(firstNumber, secondNumber)}`;
  const question = `${firstNumber} ${secondNumber}`;
  return [question, excpectedResult];
};

export default () => runGame(description, getQuestionAndAnswer);
