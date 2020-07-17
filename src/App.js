import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Question from "./components/Question";
import StartAgain from "./components/StartAgain";

function App() {
  const [started, setStarted] = useState(null);
  const startGame = () => setStarted(true);
  const [number, setNumber] = useState(0);
  const nextQuestion = () => setNumber(number + 1);
  const [score, setScore] = useState(0);
  const increaseScore = () => setScore(score + 1);
  const [questions, setQuestions] = useState([
    {
      question: "Port-au-Prince is the capital of",
      options: [
        "Mexico",
        "Haiti",
        "Romania",
        "Saint Helena, Ascension and Tristan da Cunha",
      ],
      winner: "Haiti",
    },
    {
      question: "Vienna is the capital of",
      options: [
        "Trinidad and Tobago",
        "Burundi",
        "Austria",
        "Brunei Darussalam",
      ],
      winner: "Austria",
    },
    {
      question: "Stanley is the capital of",
      options: [
        "Iran (Islamic Republic of)",
        "Palestine, State of",
        "Italy",
        "Falkland Islands (Malvinas)",
      ],
      winner: "Falkland Islands (Malvinas)",
    },
    {
      question: "Yaoundé is the capital of",
      options: ["Åland Islands", "Cameroon", "India", "American Samoa"],
      winner: "Cameroon",
    },
  ]);

  return (
    <div className="App">
      <h1>country quiz</h1>
      {started ? (
        <Question
          data={questions[number]}
          onClick={increaseScore}
          next={nextQuestion}
        ></Question>
      ) : (
        <StartAgain onClick={startGame} text="Start Game"></StartAgain>
      )}
    </div>
  );
}

export default App;
