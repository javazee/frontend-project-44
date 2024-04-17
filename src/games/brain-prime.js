import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getQuestionAndAnswer = () => {
  const limit = 20;
  const question = getRandomInt(limit);
  const expectedResult = isPrime(question) ? 'yes' : 'no';
  return [question, expectedResult];
};

export default () => runGame(description, getQuestionAndAnswer);
