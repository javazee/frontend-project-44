import { runGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const size = 10;
  const maxStep = 10;
  const indexToHide = getRandomInt(size);
  const startElement = getRandomInt(100);
  const step = getRandomInt(maxStep) + 1;
  const seriesOfNumber = [];
  let question = '';
  let expectedResult = '';
  for (let i = 0; i < size; i += 1) {
    const number = startElement + (step * i);
    seriesOfNumber.push(number);
    if (i === indexToHide) {
      question += '.. ';
      expectedResult = `${number}`;
    } else {
      question += `${number} `;
    }
  }
  return [question, expectedResult];
};

export default () => runGame(description, getQuestionAndAnswer);
