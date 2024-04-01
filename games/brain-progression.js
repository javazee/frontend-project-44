import {
  successThreshold, introduction, analyzeResult, getRandomInt, getResult, asc,
} from '../src/index.js';

const generateSeries = () => {
  const size = 10;
  const maxStep = 10;
  const startElement = getRandomInt(100);
  const step = getRandomInt(maxStep);
  const seriesOfNumber = [];
  for (let i = 0; i < size; i += 1) {
    const number = startElement + (step * i);
    seriesOfNumber.push(number);
  }
  return seriesOfNumber;
};

const makeQuestion = (series, indexToHide) => {
  let question = '';

  for (let i = 0; i < series.length; i += 1) {
    if (indexToHide === i) {
      question += '.. ';
    } else {
      question += `${series[i]} `;
    }
  }
  return question;
};

const playRound = () => {
  const seriesOfNumber = generateSeries();
  const indexToHide = getRandomInt(seriesOfNumber.length);
  const question = makeQuestion(seriesOfNumber, indexToHide);
  const answer = asc(question);
  const expected = `${seriesOfNumber[indexToHide]}`;
  const isCorrect = answer === expected;
  return getResult(isCorrect, answer, expected);
};

export default () => {
  const player = introduction('What number is missing in the progression?');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    if (playRound()) {
      successAttempts += 1;
    } else {
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
