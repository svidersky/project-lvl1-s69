import gameCoreLogic from '../lib/gameCoreLogic';
import * as cf from '../lib/commonFunctions';

const rulesDescription = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = (number) => {
  const question = `Question: ${number}`;
  return question;
};

const generateQuizData = () => {
  const number = cf.generateRandomInt();
  return number;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const calculateRightAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

export default function startEvenGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
