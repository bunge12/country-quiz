import React from "react";
import styled from "styled-components";
import StartAgain from "./StartAgain";

const Container = styled.div`
  border-radius: 10px;
  background-color: gray;
  width: 40%;
  margin: 0px auto;
`;

export default function Finished(props) {
  return (
    <Container>
      <h1>Results</h1>
      You got {props.result} correct answers
      <br />
      <StartAgain onClick={props.onClick} text="Try Again"></StartAgain>
    </Container>
  );
}
