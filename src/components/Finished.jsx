import React from "react";
import styled from "styled-components";
import StartAgain from "./StartAgain";

const Container = styled.div`
  margin: 0px auto;
  color: #1d365c;
`;

const Score = styled.span`
  color: #6fcf97;
  font-size: x-large;
  font-weight: bolder;
`;

export default function Finished(props) {
  let conjugate = "";
  props.result === 1 ? (conjugate = "answer") : (conjugate = "answers");
  return (
    <Container>
      <h1>Results</h1>
      You got <Score>{props.result}</Score> correct {conjugate}
      <br />
      <StartAgain onClick={props.onClick} text="Try Again"></StartAgain>
    </Container>
  );
}
