import gameCoreLogic from '../lib/gameCoreLogic';
import { generateRandomInt } from '../lib/commonFunctions';

const rulesDescription = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = (number) => {
  const question = `Question: ${number}`;
  return question;
};

const generateQuizData = () => {
  const number = generateRandomInt(100, 1);
  return number;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const calculateRightAnswer = (number) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return rightAnswer;
};

export default function startEvenGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
