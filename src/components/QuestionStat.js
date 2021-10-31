const QuestionStat = ({ text, count }) => {
  return (
    <div className="question-stat">
      <span>{text}</span>
      <span>{count}</span>
    </div>
  );
};

export default QuestionStat;
