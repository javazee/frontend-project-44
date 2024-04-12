import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getExpectedResult = (number) => (isPrime(number) ? 'yes' : 'no');

const generateQuestion = () => {
  const limit = 20;
  return getRandomInt(limit);
};

export default () => runGame(description, generateQuestion, getExpectedResult);
