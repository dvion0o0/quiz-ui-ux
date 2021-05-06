import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Quiz from "./Quiz";
import { useGlobalContext } from "./context";

function App() {
  let history = useHistory();
  const { fetchQuestions, quiz_questions, quiz_time } = useGlobalContext();

  const handleClick = () => {
    fetchQuestions();
    localStorage.setItem("DATA", JSON.stringify(quiz_questions));
    localStorage.setItem("TIME", JSON.stringify(quiz_time));
    history.push("./quiz");
  };

  return (
    <Switch>
      <Route exact path="/quiz">
        <Quiz />
      </Route>
      <Route exact path="/">
        <button onClick={handleClick}>Start Quiz</button>
      </Route>
    </Switch>
  );
}

export default App;
