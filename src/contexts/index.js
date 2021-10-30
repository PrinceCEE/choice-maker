import { createContext } from "react";

const QuestionContext = createContext({ state: null, setState: () => {} });

export default QuestionContext;
