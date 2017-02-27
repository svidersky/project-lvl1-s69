import readlineSync from 'readline-sync';

export const generateRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min));

export const getUserAnswer = () =>
  readlineSync.question('Your answer: ');

export const getUserName = () =>
  readlineSync.question('May I have your name? ');
