import {
  successThreshold, introduction, analyzeResult, getRandomInt, getResult, asc,
} from '../src/index.js';

const nod = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const k = firstNumber % secondNumber;
    return nod(secondNumber, k);
  }
  return firstNumber;
};

export default () => {
  const player = introduction('Find the greatest common divisor of given numbers.');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const givenNumbers = `${firstNumber} ${secondNumber}`;
    const expectedResult = nod(firstNumber, secondNumber);
    const answer = asc(givenNumbers);
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
