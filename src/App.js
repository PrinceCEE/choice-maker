import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddQuestion from "./pages/AddQuestion";
import QuestionAnswer from "./pages/QuestionAnswer";
import QuestionContext from "./contexts";
import "./App.css";

function App() {
  const [state, setState] = useState({
    prevQuestions: [],
    currentQuestion: {},
  });

  return (
    <QuestionContext.Provider value={{ state, setState }}>
      <Router>
        <Switch>
          <Route path="/" component={AddQuestion} exact />
          <Route path="/answer" component={QuestionAnswer} exact />
        </Switch>
      </Router>
    </QuestionContext.Provider>
  );
}

export default App;
