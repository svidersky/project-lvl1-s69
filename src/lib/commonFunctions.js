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

export const generateOperator = () => {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export const showQuestion = (num) => {
  console.log(`Question: ${num}`);
};

export const showQuestionCalc = (number1, number2, operator) => {
  console.log(`Question: ${number1} ${operator} ${number2}`);
};

export const getUserAnswer = () =>
  readlineSync.question('Your answer: ');

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
