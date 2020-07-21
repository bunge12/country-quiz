import React, { useState } from "react";
import styled from "styled-components";
import Options from "./Options";
import Next from "./Next";

const Container = styled.div`
  color: #30527b;
  background-color: white;
  font-weight: 500;
  text-align: left;
`;
const Flag = styled.img`
  width: 100px;
  padding: 15px;
`;

export default function Question(props) {
  const { question, options, winner } = props.data;
  const [answered, setAnswered] = useState(0);
  const checkWinner = (event) => {
    if (event === winner) {
      setAnswered(1);
      props.onClick();
    } else {
      setAnswered(2);
    }
  };
  return (
    <Container>
      {question.includes("&") ? (
        <>
          <Flag src={question.split("&", 1)}></Flag>
          <figcaption>{question.split("&")[1]}</figcaption>
        </>
      ) : question.includes("↵") ? (
        question.split("↵", 2)
      ) : (
        question
      )}
      <Options onClick={checkWinner} data={options} winner={winner}></Options>
      {answered ? <Next text="Next" onClick={props.next}></Next> : <></>}
    </Container>
  );
}
