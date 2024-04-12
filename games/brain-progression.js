import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const size = 10;
  const maxStep = 10;
  const indexToHide = getRandomInt(size);
  const startElement = getRandomInt(100);
  const step = getRandomInt(maxStep) + 1;
  const seriesOfNumber = [];
  for (let i = 0; i < size; i += 1) {
    const number = startElement + (step * i);
    seriesOfNumber.push(number);
  }
  return [indexToHide, seriesOfNumber];
};

const getExpectedResult = ([indexToHide, seriesOfNumber]) => `${seriesOfNumber[indexToHide]}`;

const decorateQuestion = ([indexToHide, seriesOfNumber]) => {
  let question = '';
  for (let i = 0; i < seriesOfNumber.length; i += 1) {
    if (i === indexToHide) {
      question += '.. ';
    } else {
      question += `${seriesOfNumber[i]} `;
    }
  }
  return question;
};

export default () => runGame(description, generateQuestion, getExpectedResult, decorateQuestion);
