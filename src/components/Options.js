export const OptionsWithInput = ({ questionOptions, setQuestionOptions }) => {
  return (
    <div>
      <div className="options-container">
        {questionOptions.map((_, index) => (
          <div className="option" key={index}>
            <span>{String.fromCharCode(index + 65)}</span>
            <input
              type="text"
              placeholder="Enter answer..."
              onChange={(e) => {
                setQuestionOptions((options) => {
                  options[index].value = e.target.value.trim();
                  return [...options];
                });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Option = ({ isAnswer, index, text }) => {
  const className = isAnswer ? "answer-option answer" : "answer-option";

  return (
    <div className={className}>
      <span>{String.fromCharCode(index + 65)}</span>
      <span>{text}</span>
    </div>
  );
};
