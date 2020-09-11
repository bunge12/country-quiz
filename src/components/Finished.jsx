import React from "react";
import styled from "styled-components";
import StartAgain from "./StartAgain";
import winner from "../img/winner.svg";

const Container = styled.div`
  margin: 0px auto;
  color: #1d365c;
`;

const Score = styled.span`
  color: #6fcf97;
  font-size: x-large;
  font-weight: bolder;
`;

const Image = styled.img`
  width: 50%;
  margin-top: 2rem;
`;

export default function Finished(props) {
  let conjugate = "";
  props.result === 1 ? (conjugate = "answer") : (conjugate = "answers");
  return (
    <Container>
      <Image src={winner} alt="winner drawing"></Image>
      <h1>Results</h1>
      You got <Score>{props.result}</Score> correct {conjugate} answers out of{" "}
      {props.quantity}
      <br />
      <StartAgain onClick={props.onClick} text="Try Again"></StartAgain>
    </Container>
  );
}
