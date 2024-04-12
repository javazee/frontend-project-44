import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');

const getExpectedResult = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateQuestion = () => {
  const limit = 100;
  return getRandomInt(limit);
};

export default () => runGame(description, generateQuestion, getExpectedResult);
