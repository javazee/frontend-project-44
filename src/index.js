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

export const runGame = (description, getQuestionAndAnswer) => {
  const player = introduction();
  console.log(description);

  let successAttempts = 0;

  while (successAttempts < successThreshold) {
    const [question, expectedResult] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === expectedResult) {
      console.log('Correct!');
      successAttempts += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResult}'.`);
      break;
    }
  }

  analyzeResult(successAttempts, player);
};
