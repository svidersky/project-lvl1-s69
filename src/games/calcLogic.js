import gameCoreLogic from '../lib/gameCoreLogic';
import * as cf from '../lib/commonFunctions';

const rulesDescription = 'What is the result of the expression?';

const generateOperator = () => {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const generateQuizData = () => {
  const data = [];
  data.push(cf.generateRandomInt());
  data.push(cf.generateRandomInt());
  data.push(generateOperator());
  return data;
};

const calculateRightAnswer = (data) => {
  const number1 = data[0];
  const number2 = data[1];
  const operator = data[2];
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

const generateQuestion = (data) => {
  const number1 = data[0];
  const number2 = data[1];
  const operator = data[2];
  const question = `Question: ${number1} ${operator} ${number2}`;
  return question;
};

export default function startCalcGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
