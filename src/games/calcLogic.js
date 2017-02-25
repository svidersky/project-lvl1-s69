import * as cf from '../lib/commonFunctions';

const calcRulesDescription = 'What is the result of the expression? \n';

const calculateRightAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return console.log('Unknown operator');
  }
};

export default function startGame() {
  cf.showWelcomeMessage();
  cf.showRulesDescription(calcRulesDescription);
  const userName = cf.getUserName();
  cf.showGreetings(userName);
  const startQuizz = (rightAnswersCount) => {
    if (rightAnswersCount === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    let currentNumber1 = cf.generateRandomInt();
    let currentNumber2 = cf.generateRandomInt();
    let currentOperator = cf.generateOperator();
    cf.showQuestionCalc(currentNumber1, currentNumber2, currentOperator);
    let userAnswer = cf.getUserAnswer();
    let rightAnswer = calculateRightAnswer(currentNumber1, currentNumber2, currentOperator);
    if (rightAnswer === Number(userAnswer)) {
      rightAnswersCount += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
    }
    return startQuizz(rightAnswersCount);
  };
  return startQuizz(0);
}
