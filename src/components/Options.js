const Options = ({ questionOptions, setQuestionOptions }) => {
  return (
    <div>
      <h1>Options</h1>
      <div>
        {questionOptions.map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={String.fromCharCode(index + 65)}
            onChange={(e) => {
              setQuestionOptions((options) => {
                options[index].value = e.target.value.trim();
                return [...options];
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
