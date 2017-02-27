import gameCoreLogic from '../lib/gameCoreLogic';
import { generateRandomInt } from '../lib/commonFunctions';

const rulesDescription = 'Answer "yes" if given number is a Prime number otherwise answer "no".';

const generateQuizData = () => {
  const number = Math.abs(generateRandomInt(100, 1));
  return number;
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const calculateRightAnswer = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const generateQuestion = (number) => {
  const question = `Question: ${number}`;
  return question;
};

export default function startPrimeGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
