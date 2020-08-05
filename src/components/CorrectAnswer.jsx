import React from "react";
import styled from "styled-components";

const Correct = styled.button`
  width: 92%;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  background-color: #5fc088;
  color: white;
  border: 1px #5fc088 solid;
  border-radius: 10px;
  display: block;
  outline: none;
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
      <Icon>
        <span role="img" aria-label="checkmark">
          ✅
        </span>
      </Icon>
    </Correct>
  );
}
