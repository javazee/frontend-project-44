import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const k = firstNumber % secondNumber;
    return nod(secondNumber, k);
  }
  return firstNumber;
};

const getExpectedResult = ([left, right]) => `${nod(left, right)}`;

const generateQuestion = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  return [firstNumber, secondNumber];
};

const decorateQuestion = ([left, right]) => `${left} ${right}`;

export default () => runGame(description, generateQuestion, getExpectedResult, decorateQuestion);
