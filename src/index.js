import readlineSync from 'readline-sync';

export const successThreshold = 3;

export const introduction = (question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
};

export const analyzeResult = (attemptsCount, player) => {
  if (attemptsCount === 3) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

export const getRandomInt = (limit) => Math.floor(Math.random() * limit);

export const getRandomFromArray = (signArray) => {
  const index = Math.floor(Math.random() * signArray.length);
  return signArray[index];
};

export const matches = (result, answer) => (result && answer === 'yes') || (!result && answer === 'no');

export const getResult = (isCorrect, answer, expected) => {
  if (isCorrect) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
  return false;
};

export const asc = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};
