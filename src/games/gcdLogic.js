import { cons, car, cdr } from 'hexlet-pairs';
import gameCoreLogic from '../lib/gameCoreLogic';
import * as cf from '../lib/commonFunctions';

const rulesDescription = 'Find the greatest common divisor of given numbers.\n';

const showQuestion = (pair) => {
  const number1 = car(pair);
  const number2 = cdr(pair);
  console.log(`Question: ${number1} ${number2}`);
};

const generateQuizData = () => {
  const pair = cons(cf.generateRandomInt(), cf.generateRandomInt());
  return pair;
};

const calculateGCD = (number1, number2) => {
  if (number2 === 0) {
    return String(number1);
  }
  return calculateGCD(number2, number1 % number2);
};

const calculateRightAnswer = (pair) => {
  const result = calculateGCD(car(pair), cdr(pair));
  return result;
};

export default function startGCDGame() {
  gameCoreLogic(rulesDescription, showQuestion, generateQuizData, calculateRightAnswer);
}
