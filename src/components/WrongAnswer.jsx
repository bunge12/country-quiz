import React from "react";
import styled from "styled-components";

const Wrong = styled.button`
  width: 92%;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  background-color: #eb8182;
  color: white;
  border: 1px #eb8182 solid;
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

export default function WrongAnswer(props) {
  return (
    <Wrong value={props.name}>
      <Name>{props.name}</Name>
      <Icon>
        <span role="img" aria-label="no entry">
          ⛔️
        </span>
      </Icon>
    </Wrong>
  );
}
