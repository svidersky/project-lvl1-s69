import readlineSync from 'readline-sync';

export const showWelcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () =>
  readlineSync.question('May I have your name? ');

export const showRulesDescription = (rules) => {
  console.log(rules);
};

export const showGreetings = (name) => {
  console.log(`Hello, ${name}!\n`);
};

export const generateRandomInt = () =>
  Math.floor(Math.random() * (100 - 1));

export const getUserAnswer = () =>
  readlineSync.question('Your answer: ');
