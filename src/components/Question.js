const Question = ({ question, setQuestion }) => {
  return (
    <div>
      <h1>Question</h1>
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
