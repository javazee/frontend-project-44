import {
  successThreshold, introduction, analyzeResult, getRandomInt, getRandomFromArray, getResult, asc,
} from '../src/index.js';

const calculate = (left, operator, right) => {
  if (operator === '+') {
    return left + right;
  } if (operator === '-') {
    return left - right;
  }
  return left * right;
};

export default () => {
  const player = introduction('What is the result of the expression?');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const leftOperand = getRandomInt(100);
    const rightOperand = getRandomInt(10);
    const operator = getRandomFromArray(['+', '-', '*']);
    const expression = `${leftOperand} ${operator} ${rightOperand}`;
    const expectedResult = calculate(leftOperand, operator, rightOperand);
    const answer = asc(expression);
    const isCorrect = answer === `${expectedResult}`;
    const result = getResult(isCorrect, answer, expectedResult);
    if (result) {
      successAttempts += 1;
    } else {
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
