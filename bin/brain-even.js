#!/usr/bin/env node
import readlineSync from 'readline-sync';

const successThreshold = 3;

const play = () => {
  const player = greeting();

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

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

const playRound = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isEvenNumber = (number % 2 === 0);

  if ((isEvenNumber && answer === 'yes') || (!isEvenNumber && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenNumber ? 'yes' : 'no'}'.`);
    return false;
  }
  return true;
};

const getRandomInt = () => Math.floor(Math.random() * 100);

const analyzeResult = (attemptsCount, player) => {
  if (attemptsCount === 3) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

play();
