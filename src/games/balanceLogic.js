import gameCoreLogic from '../lib/gameCoreLogic';
import { generateRandomInt } from '../lib/commonFunctions';

const rulesDescription = 'Balance the given number.';

const generateQuizData = () => {
  const number = Math.abs(generateRandomInt(1000, 1));
  return number;
};

const getSortedNumbersArray = (number) => {
  const arr = Array.from(number.toString()).map(Number);
  return arr.concat().sort();
};

const calculateRightAnswer = (number) => {
  const sortedNumbers = getSortedNumbersArray(number);
  let rebalance = false;
  for (let i = 1; i < sortedNumbers.length; i += 1) {
    if (sortedNumbers[i - 1] + 1 < sortedNumbers[i]) {
      rebalance = true;
      const half = (sortedNumbers[i - 1] + sortedNumbers[i]) / 2;
      sortedNumbers[i - 1] = Math.floor(half);
      sortedNumbers[i] = Math.ceil(half);
    }
  }

  const updatedNumber = sortedNumbers.join('');
  if (rebalance) {
    return calculateRightAnswer(updatedNumber);
  }
  return updatedNumber;
};

const generateQuestion = (number) => {
  const question = `Question: ${number}`;
  return question;
};

export default function startBalanceGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
