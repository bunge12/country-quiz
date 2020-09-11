import React from "react";
import styled from "styled-components";
import StartAgain from "./StartAgain";
import Scoreboard from "./Scoreboard";
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

const Restart = styled.div`
  color: #1d365c;
  font-size: small;
  text-align: center;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #1d365c;
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
      <Scoreboard data={props.scores}></Scoreboard>
      <StartAgain
        onClick={() => props.onClick(0)}
        text="Try Again"
      ></StartAgain>
      <Restart>
        <Link onClick={() => props.onClick(1)}>Restart game</Link>
        {props.scores.length > 0 && (
          <>
            {" "}
            | <Link onClick={props.reset}>Reset scores</Link>
          </>
        )}
      </Restart>
    </Container>
  );
}
