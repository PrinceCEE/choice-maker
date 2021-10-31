const Question = ({ question, setQuestion }) => {
  return (
    <div className="question-container">
      <input
        type="text"
        placeholder="Q: Enter your question here"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
    </div>
  );
};

export default Question;
