import OutputMessage from '../../../ui/OutputMessage.js';
import InputQuestion from '../../../ui/InputQuestion.js';
import AnswerFeedback from './AnswerFeedback.js';

import AnswerChecker from '../controllers/AnswerChecker.js';

const QuestionAnswer = (name, question, correctAnswer) => {
  const userName = name;
  OutputMessage(question);
  let userAnswer = InputQuestion();

  userAnswer = AnswerChecker(correctAnswer, userAnswer);

  AnswerFeedback(userAnswer, userName, correctAnswer);

  return userAnswer;
};

export default QuestionAnswer;
