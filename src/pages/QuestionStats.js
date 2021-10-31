import { useContext } from "react";
import Nav from "../components/Nav";
import QuestionContext from "../contexts";
import QuestionStat from "../components/QuestionStat";
import "./QuestionStats.css";

const QuestionStats = () => {
  const { state } = useContext(QuestionContext);

  return (
    <div className="stats">
      <Nav showArror />
      <div className="stats-header">Question stats</div>
      <div className="question-stats">
        {state.prevQuestions.map((_, index) => {
          const val = state.prevQuestions[index];
          return (
            <QuestionStat key={index} text={val.question} count={val.count} />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionStats;
