import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 0.5rem;
`;

const Scores = styled.div`
  margin-top: 1rem;
`;

const Score = styled.span`
  background: none;
  color: #1d365c;
  border-color: #1d365c;
  border: 1px solid #1d365c;
  padding: 0.25rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
`;

export default function Scoreboard(props) {
  const list = props.data.map((each) => (
    <Score>
      {each.score}/{each.quantity}
    </Score>
  ));
  return (
    <Container>
      {props.data.length > 0 && "Your latest scores:"}
      <Scores>{list}</Scores>
    </Container>
  );
}
