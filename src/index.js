import readlineSync from 'readline-sync';

export const successThreshold = 3;

export const greeting = () => {
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

export const getRandomInt = (limit) => Math.floor(Math.random() * limit);

export const getRandomFromArray = (signArray) => {
  const index = Math.floor(Math.random() * signArray.length);
  return signArray[index];
};
