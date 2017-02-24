import readlineSync from 'readline-sync';

export const showGameName = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () =>
  readlineSync.question('May I have your name? ');

export const showGreetings = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const shoUserName = (name) => {
  console.log(`Hello, ${name}!\n`);
};

export const generateRandomInt = () =>
  Math.floor(Math.random() * (100 - 1));

export const showQuestion = (num) => {
  console.log(`Question: ${num}`);
};

export const getUserAnswer = () =>
  readlineSync.question('Your answer: ');

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const startGame = () => {
  showGameName();
  showGreetings();
  const userName = getUserName();
  shoUserName(userName);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    let number = generateRandomInt();
    showQuestion(number);
    let answer = getUserAnswer();
    if (isEven(number) === answer) {
      acc += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number)}'.\n Let's try again, ${userName}!`);
    }
    return iter(acc);
  };
  return iter(0);
};
