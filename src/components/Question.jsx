import QUESTIONS from '../questions.js';
import Answers from './Answers.jsx';
import QuestionTimer from './QuestionTimer.jsx';

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  return (
    <div id="question">
      <QuestionTimer key={index} timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers answers={QUESTIONS[index].answers} onSelect={onSelectAnswer} />
    </div>
  );
}
