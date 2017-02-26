import * as cf from './commonFunctions';
import showMessage from './view';

const gameCycles = 3;

const welcomeMessage = 'Welcome to the Brain Games!';

const generateGreetingsMessage = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};

const generateCongratsMesage = (userName) => {
  const message = `Congratulations, ${userName}!`;
  return message;
};
const generateErrorMessage = (userAnswer, rightAnswer, userName) => {
  const message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;
  return message;
};
const correctMessage = 'Correct!';

export default function gameCoreLogic(
  rulesDescription,
  generateQuestion,
  generateQuizData,
  calculateRightAnswer) {
  showMessage(welcomeMessage);
  showMessage(rulesDescription);
  const userName = cf.getUserName();
  showMessage(generateGreetingsMessage(userName));
  const startQuiz = (counter) => {
    let rightAnswersCount = counter;
    if (rightAnswersCount === gameCycles) {
      return showMessage(generateCongratsMesage(userName));
    }
    const currentQuizData = generateQuizData();
    showMessage(generateQuestion(currentQuizData));
    const userAnswer = cf.getUserAnswer();
    const rightAnswer = calculateRightAnswer(currentQuizData);
    if (rightAnswer === userAnswer) {
      rightAnswersCount += 1;
      showMessage(correctMessage);
    } else {
      return showMessage(generateErrorMessage(userAnswer, rightAnswer, userName));
    }
    return startQuiz(rightAnswersCount);
  };
  return startQuiz(0);
}
