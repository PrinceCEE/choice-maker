import { useContext } from "react";
import QuestionContext from "../contexts";

const QuestionAnswer = () => {
  const {
    state: { prevQuestions, currentQuestion },
  } = useContext(QuestionContext);

  return (
    <div>
      <div>
        <h1>Question</h1>
        <p>{currentQuestion.question}</p>
      </div>
      <div>{currentQuestion.options[0].value}</div>
    </div>
  );
};

export default QuestionAnswer;
