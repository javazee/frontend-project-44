import { runGame } from '../index.js';
import { getRandomInt, getRandomFromArray } from '../utils.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const leftOperand = getRandomInt(100);
  const rightOperand = getRandomInt(10);
  const operator = getRandomFromArray(['+', '-', '*']);
  let rightAnswer = 0;
  if (operator === '+') {
    rightAnswer = `${leftOperand + rightOperand}`;
  } else if (operator === '-') {
    rightAnswer = `${leftOperand - rightOperand}`;
  } else {
    rightAnswer = `${leftOperand * rightOperand}`;
  }
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  return [question, rightAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
