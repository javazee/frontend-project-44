import readlineSync from 'readline-sync';

export const successThreshold = 3;

export const introduction = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const analyzeResult = (attemptsCount, player) => {
  if (attemptsCount === 3) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

export const runGame = (desc, getQuestion, getRightAnswer, decorateQuestion = (obj) => obj) => {
  const player = introduction();
  console.log(desc);

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const questionData = getQuestion();
    const question = decorateQuestion(questionData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const expected = getRightAnswer(questionData);
    if (answer === expected) {
      console.log('Correct!');
      successAttempts += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
