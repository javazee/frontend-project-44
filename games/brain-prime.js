import {
  successThreshold, introduction, analyzeResult, getRandomInt, matches, getResult, asc,
} from '../src/index.js';

const isPrimeNumber = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

export default () => {
  const player = introduction('Answer "yes" if given number is prime. Otherwise answer "no"');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const limit = 20;
    const number = getRandomInt(limit);
    const answer = asc(number);
    const isPrime = isPrimeNumber(number);
    const expected = isPrime ? 'yes' : 'no';
    const isCorrect = matches(isPrime, answer);
    const result = getResult(isCorrect, answer, expected);
    if (result) {
      successAttempts += 1;
    } else {
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
