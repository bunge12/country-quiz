import React, { useState } from "react";
import styled from "styled-components";
import Options from "./Options";
import Next from "./Next";

const Container = styled.div`
  border-radius: 10px;
  background-color: gray;
  width: 40%;
`;

export default function Question(props) {
  const { question, options, winner } = props.data;
  const [answered, setAnswered] = useState(0);
  const checkWinner = (event) => {
    if (event == winner) {
      setAnswered(1);
      props.onClick();
    } else {
      setAnswered(2);
    }
  };
  return (
    <Container>
      {question}
      <Options onClick={checkWinner} data={options}></Options>
      {answered ? <Next text="Next"></Next> : <></>}
    </Container>
  );
}
