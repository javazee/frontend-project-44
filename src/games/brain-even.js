import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const description = ('Answer "yes" if the number is even, otherwise answer "no".');

const getQuestionAndAnswer = () => {
  const limit = 100;
  const question = getRandomInt(limit);
  const expectedResult = question % 2 === 0 ? 'yes' : 'no';
  return [question, expectedResult];
};

export default () => runGame(description, getQuestionAndAnswer);
