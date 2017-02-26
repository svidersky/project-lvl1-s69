import gameCoreLogic from '../lib/gameCoreLogic';
import * as cf from '../lib/commonFunctions';

const rulesDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const showQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const generateQuizData = () => {
  const number = cf.generateRandomInt();
  return number;
};

const calculateRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default function startEvenGame() {
  gameCoreLogic(rulesDescription, showQuestion, generateQuizData, calculateRightAnswer);
}
