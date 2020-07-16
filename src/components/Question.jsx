import React from "react";
import styled from "styled-components";
import Options from "./Options";
const Container = styled.div`
  border-radius: 10px;
  background-color: gray;
  width: 40%;
`;

export default function Question(props) {
  const { question, options, winner } = props.data;
  return (
    <Container>
      {question}
      <Options onClick={props.onClick} data={options}></Options>
    </Container>
  );
}
