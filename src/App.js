import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddQuestion from "./pages/AddQuestion";
import QuestionAnswer from "./pages/QuestionAnswer";
import QuestionStats from "./pages/QuestionStats";
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
          <Route path="/stats" exact component={QuestionStats} />
        </Switch>
      </Router>
    </QuestionContext.Provider>
  );
}

export default App;
