import React from "react";
import styled from "styled-components";

const Correct = styled.button`
  width: 97%;
  text-align: left;
  margin: 0.5em;
  padding: 1em;
  background-color: #5fc088;
  color: white;
  border: 1px #7389da solid;
  border-radius: 10px;
  display: block;
`;

const Icon = styled.span`
  float: right;
  margin-right: 1em;
`;
const Name = styled.span`
  float: left;
  margin-top: 4px;
  margin-left: 1em;
`;

export default function CorrectAnswer(props) {
  return (
    <Correct value={props.name}>
      <Name>{props.name}</Name>
      <Icon>✅</Icon>
    </Correct>
  );
}
