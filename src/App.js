import React, { useState, useEffect } from "react";
import "./App.css";
import Finished from "./components/Finished";
import Question from "./components/Question";
import StartAgain from "./components/StartAgain";
import NumberSelector from "./components/NumberSelector";
import axios from "axios";
import styled from "styled-components";
import usePersistentState from "./hooks/usePersistentState";

const Title = styled.div`
  width: 50%;
  margin: 0px auto;
  text-align: left;
  margin-bottom: -1em;
  color: white;
  @media only screen and (max-width: 600px) {
    width: 85%;
    font-size: small;
  }
  @media only screen and (min-width: 768px) {
    width: 45%;
  }
  @media only screen and (min-width: 1200px) {
    width: 35%;
  }
`;

const Footer = styled.footer`
  color: white;
  margin-top: 2em;
  font-size: x-small;
`;

function App() {
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [quantity, setQuantity] = useState(4);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrent] = useState([]);
  const [scores, setScores] = usePersistentState("scores", []);

  const startGame = () => setStarted(true);
  const increaseScore = () => setScore(score + 1);
  const changeQuantity = (data) => setQuantity(data);

  const restart = (data) => {
    data === 1 ? setStarted(false) : setStarted(true);
    setNumber(0);
    setScore(0);
    setFinished(null);
  };
  const nextQuestion = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
      setCurrent((prev) => questions[number + 1]);
    } else {
      setScores([{ score, quantity }, ...scores]);
      setFinished(true);
    }
  };

  const generateQuestions = (response) => {
    let questions = [];
    for (let i = 0; i < quantity; i++) {
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
      questions.push({ id: i, question, options, winner: winner.name });
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
        setCurrent(questions[0]);
      });
  }, [finished, quantity]);

  return (
    <div className="App">
      <div className="container">
        <Title>
          <h1>COUNTRY QUIZ</h1>
        </Title>
        <div className="game">
          {finished ? (
            <Finished
              result={score}
              quantity={quantity}
              scores={scores}
              onClick={restart}
            ></Finished>
          ) : started ? (
            <Question
              data={currentQuestion}
              onClick={increaseScore}
              next={nextQuestion}
              quantity={quantity}
              number={currentQuestion.id || 0}
              key={currentQuestion.id || 0}
            ></Question>
          ) : (
            <>
              <NumberSelector
                onChange={changeQuantity}
                id="number"
              ></NumberSelector>
              <StartAgain onClick={startGame} text="Start Game"></StartAgain>
            </>
          )}
        </div>
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
