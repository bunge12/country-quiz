import React, { useState, useEffect } from "react";
import { Offline } from "react-detect-offline";
import { isMobile } from "react-device-detect";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";
import ReactGA from "react-ga";

import "./App.css";
import Finished from "./components/Finished";
import Question from "./components/Question";
import StartAgain from "./components/StartAgain";
import NumberSelector from "./components/NumberSelector";
import axios from "axios";
import styled from "styled-components";
import usePersistentState from "./hooks/usePersistentState";
import world from "./img/world.svg";

const Title = styled.div`
  width: 50%;
  margin: 0px auto;
  text-align: left;
  color: white;
  font-size: xx-large;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    width: 85%;
    font-size: x-large;
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
  margin-top: 1rem;
  font-size: x-small;
`;

const Welcome = styled.p``;

const Warning = styled.div`
  olor: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const Image = styled.img`
  width: 75%;
  margin: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const SoundIcon = styled.span`
  float: right;
  margin-right: 0.5rem;
`;
const NightIcon = styled.span`
  float: right;
`;

function App() {
  ReactGA.initialize("UA-178688395-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [quantity, setQuantity] = useState(4);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrent] = useState([]);
  const [scores, setScores] = usePersistentState("scores", []);
  const [sound, setSound] = usePersistentState("sound", { on: true });
  const [dark, setDark] = usePersistentState("dark", { on: false });
  dark.on ? enableDarkMode() : disableDarkMode();

  const startGame = () => setStarted(true);
  const increaseScore = () => setScore(score + 1);
  const changeQuantity = (data) => setQuantity(data);
  const resetScore = () => setScores([]);
  const toggle = () => setSound({ on: !sound.on });
  const darkToggle = () => setDark({ on: !dark.on });

  const restart = (data) => {
    data === 1 ? setStarted(false) : setStarted(true);
    data === 1 && setQuantity(4);
    setNumber(0);
    setScore(0);
    setFinished(null);
  };
  const nextQuestion = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
      setCurrent((prev) => questions[number + 1]);
    } else {
      setScores([{ score, quantity }, ...scores.slice(0, 5)]);
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
    // eslint-disable-next-line
  }, [finished, quantity]);

  return (
    <div className="App">
      <div className="container">
        <Title>COUNTRY QUIZ</Title>
        <div className="game">
          <Offline>
            <Warning>
              You seem to be offline. You must be online for the game to work!
            </Warning>
          </Offline>
          <NightIcon>
            <span role="img" aria-label="sound control" onClick={darkToggle}>
              {dark.on ? "🌞" : "🌒"}
            </span>
          </NightIcon>

          {!isMobile && (
            <SoundIcon>
              <span role="img" aria-label="sound control" onClick={toggle}>
                {sound.on ? "🔈" : "🔇"}
              </span>
            </SoundIcon>
          )}
          {finished ? (
            <Finished
              result={score}
              quantity={quantity}
              scores={scores}
              onClick={restart}
              reset={resetScore}
            ></Finished>
          ) : started ? (
            <Question
              data={currentQuestion}
              onClick={increaseScore}
              next={nextQuestion}
              quantity={quantity}
              number={currentQuestion.id || 0}
              key={currentQuestion.id || 0}
              sound={sound.on}
            ></Question>
          ) : (
            <>
              <Welcome>
                <b>Welcome to Country Quiz!</b>
                <Image src={world} alt="drawing of world map" />
                Answer 4, 8, or 12 geography-related questions. Test your
                knowledge of capitals and flags from countries around the world.
                Good luck!
              </Welcome>
              <NumberSelector
                onChange={changeQuantity}
                id="number"
              ></NumberSelector>
              <StartAgain onClick={startGame} text="Start Game"></StartAgain>
            </>
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
    </div>
  );
}

export default App;
