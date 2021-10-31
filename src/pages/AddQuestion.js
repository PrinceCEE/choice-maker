import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Question from "../components/Question";
import { OptionsWithInput } from "../components/Options";
import Button from "../components/Button";
import QuestionContext from "../contexts";
import "./AddQuestion.css";
import Nav from "../components/Nav";

const AddQuestion = () => {
  const history = useHistory();
  const [question, setQuestion] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const { setState, state } = useContext(QuestionContext);

  return (
    <div>
      <div style={{ padding: "15px" }}>
        <Nav showStats />
      </div>
      <Question question={question} setQuestion={setQuestion} />
      <OptionsWithInput
        questionOptions={questionOptions}
        setQuestionOptions={setQuestionOptions}
      />
      <div className="button-group">
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
              const prevQuestions = [...state.prevQuestions];

              let currentQuestion = {
                question,
                options: questionOptions,
              };

              const index = prevQuestions.findIndex(
                (val) => val.question.toLowerCase() === question.toLowerCase()
              );

              if (index > -1) {
                prevQuestions[index].count += 1;
              } else {
                currentQuestion.count = 1;
                prevQuestions.push(currentQuestion);
              }

              setState({
                prevQuestions,
                currentQuestion,
              });

              history.push("/answer");
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
