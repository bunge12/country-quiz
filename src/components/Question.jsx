import React, { useState } from "react";
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
  const checkWinner = (event) => {
    if (event === winner) {
      setAnswered(1);
      props.onClick();
    } else {
      setAnswered(2);
    }
  };
  const nextQuestion = () => {
    setAnswered(0);
    props.next();
  };
  const list = options.map((each) => (
    <SingleOption
      onClick={checkWinner}
      name={each}
      key={each}
      winner={winner}
    ></SingleOption>
  ));
  return (
    <Container>
      {question.includes("&") ? (
        <>
          <Flag src={question.split("&", 1)}></Flag>
          <Caption>{question.split("&")[1]}</Caption>
        </>
      ) : question.includes("↵") ? (
        question.split("↵", 2)
      ) : (
        question
      )}
      {list}
      {/* <Options onClick={checkWinner} data={options} winner={winner}></Options> */}
      {answered ? <Next text="Next" onClick={nextQuestion}></Next> : <></>}
    </Container>
  );
}
