import * as cf from '../lib/commonFunctions';

const evenRulesDescription = 'Answer "yes" if number even otherwise answer "no".\n';

export default function startGame() {
  cf.showWelcomeMessage();
  cf.showRulesDescription(evenRulesDescription);
  const userName = cf.getUserName();
  cf.showGreetings(userName);
  const startQuizz = (rightAnswersCount) => {
    if (rightAnswersCount === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    let currentQuestion = cf.generateRandomInt();
    cf.showQuestion(currentQuestion);
    let userAnswer = cf.getUserAnswer();
    if (cf.isEven(currentQuestion) === userAnswer) {
      rightAnswersCount += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cf.isEven(currentQuestion)}'.\n Let's try again, ${userName}!`);
    }
    return startQuizz(rightAnswersCount);
  };
  return startQuizz(0);
}
