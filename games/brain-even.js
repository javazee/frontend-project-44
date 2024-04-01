import {
  successThreshold, introduction, analyzeResult, getRandomInt, matches, getResult, asc,
} from '../src/index.js';

export default () => {
  const player = introduction('Answer "yes" if the number is even, otherwise answer "no".');

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const number = getRandomInt(100);
    const answer = asc(number);
    const isEvenNumber = (number % 2 === 0);
    const expected = isEvenNumber ? 'yes' : 'no';
    const isCorrect = matches(isEvenNumber, answer);
    const result = getResult(isCorrect, answer, expected);
    if (result) {
      successAttempts += 1;
    } else {
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
