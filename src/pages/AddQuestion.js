import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Question from "../components/Question";
import Options from "../components/Options";
import Button from "../components/Button";
import QuestionContext from "../contexts";

const AddQuestion = () => {
  const history = useHistory();
  const [question, setQuestion] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const { setState, state } = useContext(QuestionContext);

  return (
    <div>
      <h1>easy decision make</h1>
      <p>
        When the decision is too hard or too simple use the Easy Decision Maker
      </p>
      <Question question={question} setQuestion={setQuestion} />
      <Options
        questionOptions={questionOptions}
        setQuestionOptions={setQuestionOptions}
      />
      <div>
        <Button
          handleClick={() => {
            const lastOpt = [...questionOptions].pop();
            if (questionOptions.length === 0 || lastOpt.value !== "") {
              setQuestionOptions([...questionOptions, { value: "" }]);
              return;
            }
            alert("Fill the previous option answer");
          }}
          name="add option"
        />
        <Button
          handleClick={() => {
            if (question.length > 0 && questionOptions.length > 0) {
              const { prevQuestions } = state;
              const _question = prevQuestions.find(
                (val) => val.question === question
              );
              if (!_question) {
                setState((prevState) => {
                  return {
                    ...prevState,
                    currentQuestion: {
                      question,
                      options: questionOptions,
                    },
                  };
                });
                history.push("/answer");
              }
            } else {
              alert("Incomplete question");
            }
          }}
          name="answer"
        />
      </div>
    </div>
  );
};

export default AddQuestion;
