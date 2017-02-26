import readlineSync from 'readline-sync';

export const generateRandomInt = () =>
  Math.floor(Math.random() * (100 - 1));

export const getUserAnswer = () =>
  readlineSync.question('Your answer: ');

export const getUserName = () =>
  readlineSync.question('May I have your name? ');
