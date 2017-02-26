import { cons, car, cdr } from 'hexlet-pairs';
import gameCoreLogic from '../lib/gameCoreLogic';
import * as cf from '../lib/commonFunctions';

const rulesDescription = 'Find the greatest common divisor of given numbers.';

const generateQuestion = (pair) => {
  const number1 = car(pair);
  const number2 = cdr(pair);
  const question = `Question: ${number1} ${number2}`;
  return question;
};

const generateQuizData = () => {
  const pair = cons(cf.generateRandomInt(), cf.generateRandomInt());
  return pair;
};

const calculateGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calculateGCD(number2, number1 % number2);
};

const calculateRightAnswer = (pair) => {
  const result = calculateGCD(car(pair), cdr(pair));
  return result;
};

export default function startGCDGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
