import { useContext } from "react";
import Nav from "../components/Nav";
import QuestionContext from "../contexts";
import { Option } from "../components/Options";
import "./QuestionAnswer.css";

const QuestionAnswer = () => {
  const {
    state: { currentQuestion },
  } = useContext(QuestionContext);

  const { question, options } = currentQuestion;
  const answerIndex = Math.floor(Math.random() * options.length);

  return (
    <div className="answer-container">
      <Nav showStats showArror />
      <div className="question">
        <p>
          {question.charAt(question.length - 1) === "?"
            ? question
            : `${question} ?`}
        </p>
      </div>
      <div>
        {options.map((_, index) => (
          <Option
            key={index}
            index={index}
            text={options[index].value}
            isAnswer={index === answerIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswer;
