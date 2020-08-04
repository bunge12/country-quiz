import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleOption from "./SingleOption";
import Next from "./Next";

const Container = styled.div`
  color: #30527b;
  background-color: white;
  font-weight: 500;
  text-align: left;
`;
const Flag = styled.img`
  width: 100px;
  margin: 0.5em;
  padding: 15px;
  box-shadow: 1px 1px 15px lightgrey;
`;

const Caption = styled.figcaption`
  margin-top: 1em;
`;

export default function Question(props) {
  const { question, options, winner } = props.data;
  const [answered, setAnswered] = useState(0); // 0 = not answered, 1 = answered correctly, 2 = answered incorrectly
  const [showCorrect, setShowCorrect] = useState(null);
  useEffect(() => {
    setAnswered(0);
  }, [props.key]);
  const checkWinner = (event) => {
    // console.log(event);
    if (event === winner) {
      setAnswered(1);
      props.onClick();
      console.log("correct from question");
    } else {
      setAnswered(2);
      console.log(options.indexOf(winner));
      setShowCorrect(options.indexOf(winner));
      // disable other answers
      // show correct answer
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
    ></SingleOption>
  ));

  return (
    <Container>
      {question.includes("&") ? (
        <>
          <Flag src={question.split("&", 1)}></Flag>
          <Caption>{question.split("&")[1]}</Caption>
        </>
      ) : (
        question
      )}
      {list}
      {answered ? <Next text="Next" onClick={nextQuestion}></Next> : <></>}
    </Container>
  );
}
