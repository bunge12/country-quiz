import React, { useState, useEffect } from "react";
import "./App.css";
import Finished from "./components/Finished";
import Question from "./components/Question";
import StartAgain from "./components/StartAgain";
import axios from "axios";
import styled from "styled-components";

const Title = styled.div`
  width: 50%;
  margin: 0px auto;
  text-align: left;
  margin-bottom: -1em;
  color: white;
`;

const Footer = styled.footer`
  color: white;
  margin-top: 2em;
  font-size: x-small;
`;

function App() {
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const startGame = () => setStarted(true);
  const restart = () => {
    setFinished(null);
    setNumber(0);
    setScore(0);
    setStarted(true);
  };
  const [number, setNumber] = useState(0);
  const nextQuestion = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
    } else setFinished(true);
  };
  const [score, setScore] = useState(0);
  const increaseScore = () => setScore(score + 1);
  const [questions, setQuestions] = useState([]);
  const generateQuestions = (response) => {
    let questions = [];
    for (let i = 1; i < 5; i++) {
      const shuffled = response.sort(() => 0.5 - Math.random()).slice(0, 4);
      const winner = shuffled[Math.floor(Math.random() * shuffled.length)];
      const questionType = Math.random() >= 0.5; // True for Capital and False for Flag
      let question;
      let options = [];
      if (questionType) {
        question = `${winner.capital} is the capital of`;
        shuffled.forEach((element) => {
          options.push(element.name);
        });
      } else {
        question = `${winner.flag}&Which country does this flag belong to?`;
        shuffled.forEach((element) => {
          options.push(element.name);
        });
      }
      questions.push({ question, options, winner: winner.name });
    }
    console.log(questions);
    return questions;
  };
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;flag")
      .then((data) => {
        const questions = generateQuestions(data.data);
        setQuestions(questions);
      });
  }, [finished]);

  return (
    <div className="App">
      <Title>
        <h1>COUNTRY QUIZ</h1>
      </Title>
      <div className="game">
        {finished ? (
          <Finished result={score} onClick={restart}></Finished>
        ) : started ? (
          <Question
            data={questions[number]}
            onClick={increaseScore}
            next={nextQuestion}
          ></Question>
        ) : (
          <StartAgain onClick={startGame} text="Start Game"></StartAgain>
        )}
      </div>

      <Footer>
        Made by{" "}
        <a
          href="https://github.com/bunge12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Artur Iatsko
        </a>
      </Footer>
    </div>
  );
}

export default App;
