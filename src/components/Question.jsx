import React, { useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

import SingleOption from "./SingleOption";
import Next from "./Next";
import adventure from "../img/adventure.svg";
import success from "../sounds/success.mp3";
import fail from "../sounds/fail.mp3";

const Container = styled.div`
  color: #30527b;
  background-color: white;
  font-weight: 500;
  text-align: left;
  min-height: 45vh;
`;
const Flag = styled.img`
  width: 100px;
  margin: 0.5em;
  padding: 15px;
  box-shadow: 1px 1px 15px lightgrey;
`;

const Caption = styled.figcaption`
  margin-top: 1em;
  font-weight: bold;
`;

const Text = styled.p`
  margin-top: 1em;
  font-weight: bold;
`;

const Counter = styled.div`
  font-weight: lighter;
  font-size: small;
  text-align: center;
`;

const Image = styled.img`
  width: 30%;
  display: inline;
  float: right;
  margin-top: -5rem;
`;

export default function Question(props) {
  const { question, options, winner } = props.data;
  const [answered, setAnswered] = useState(0); // 0 = not answered, 1 = answered correctly, 2 = answered incorrectly
  const [showCorrect, setShowCorrect] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [win] = useSound(success, { volume: 0.25 });
  const [lose] = useSound(fail, { volume: 0.25 });

  const checkWinner = (event) => {
    if (event === winner) {
      setAnswered(1);
      props.onClick();
      setDisabled(true);
      win();
    } else {
      setAnswered(2);
      setShowCorrect(options.indexOf(winner));
      setDisabled(true);
      lose();
    }
  };
  const nextQuestion = () => {
    setAnswered(0);
    props.next();
  };
  let list = options.map((each, index) => (
    <SingleOption
      onClick={checkWinner}
      name={each}
      key={index}
      answerIndex={index}
      winner={winner}
      showCorrect={showCorrect}
      disabled={disabled}
    ></SingleOption>
  ));

  return (
    <Container>
      <Image src={adventure} alt="adventure drawing"></Image>
      {question.includes("&") ? (
        <>
          <Flag src={question.split("&", 1)}></Flag>
          <Caption>{question.split("&")[1]}</Caption>
        </>
      ) : (
        <Text>{question}</Text>
      )}
      {list}
      {answered ? <Next text="Next" onClick={nextQuestion}></Next> : <></>}
      <Counter>
        Question {props.number + 1} of {props.quantity}
      </Counter>
    </Container>
  );
}
