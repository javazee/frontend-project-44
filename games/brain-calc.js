import { runGame } from '../src/index.js';
import { getRandomInt, getRandomFromArray } from '../src/utils.js';

const description = 'What is the result of the expression?';

const getExpectedResult = (elements) => {
  const operator = elements[1];
  const left = elements[0];
  const right = elements[2];
  if (operator === '+') {
    return `${left + right}`;
  } if (operator === '-') {
    return `${left - right}`;
  }
  return `${left * right}`;
};

const generateQuestion = () => {
  const leftOperand = getRandomInt(100);
  const rightOperand = getRandomInt(10);
  const operator = getRandomFromArray(['+', '-', '*']);
  return [leftOperand, operator, rightOperand];
};

const decorateQuestion = (elements) => `${elements[0]} ${elements[1]} ${elements[2]}`;

export default () => runGame(description, generateQuestion, getExpectedResult, decorateQuestion);
