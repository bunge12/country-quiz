import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [started, setStarted] = useState(null);
  const [questions, setQuestions] = useState(null);

  return (
    <div className="App">
      <h1>country quiz</h1>
      <Game></Game>
    </div>
  );
}

export default App;
