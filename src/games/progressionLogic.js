import gameCoreLogic from '../lib/gameCoreLogic';
import { generateRandomInt } from '../lib/commonFunctions';

const rulesDescription = 'What number is missing in this progression?';
const sequenceLength = 10;

const generateSequence = () => {
  const step = Math.abs(generateRandomInt(10, 1));
  const firstNumberInSequence = Math.abs(generateRandomInt(25, 1));
  const sequence = [];
  let newNumber = firstNumberInSequence;
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(newNumber);
    newNumber += step;
  }
  return sequence;
};

const generateQuizData = () => {
  const sequence = generateSequence();
  const dotsPositionInArray = Math.abs(generateRandomInt(sequenceLength, 1));
  const sequenceWithDots = sequence;
  sequenceWithDots[dotsPositionInArray] = '..';
  return sequenceWithDots;
};

const calculateRightAnswer = (sequence) => {
  const dotsPosition = sequence.indexOf('..');
  const previousNumber = sequence[dotsPosition - 1];
  const nextNumber = sequence[dotsPosition + 1];
  const step = (nextNumber - previousNumber) / 2;
  const answer = previousNumber + step;
  return answer;
};

const generateQuestion = (sequence) => {
  const question = `Question: ${sequence.join(' ')}`;
  return question;
};

export default function startProgressionGame() {
  gameCoreLogic(rulesDescription, generateQuestion, generateQuizData, calculateRightAnswer);
}
