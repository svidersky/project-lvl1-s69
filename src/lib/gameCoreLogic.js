import * as cf from './commonFunctions';

export default function gameCoreLogic(
  rulesDescription,
  showQuestion,
  generateQuizData,
  calculateRightAnswer) {
  cf.showWelcomeMessage();
  cf.showRulesDescription(rulesDescription);
  const userName = cf.getUserName();
  cf.showGreetings(userName);
  const startQuiz = (rightAnswersCount) => {
    if (rightAnswersCount === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    let currentQuizData = generateQuizData();
    showQuestion(currentQuizData);
    let userAnswer = cf.getUserAnswer();
    let rightAnswer = calculateRightAnswer(currentQuizData);
    if (rightAnswer === userAnswer) {
      rightAnswersCount += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
    }
    return startQuiz(rightAnswersCount);
  };
  return startQuiz(0);
}
