import React, { useState } from "react";
import styled from "styled-components";

import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

const SingleAnswer = styled.button`
  width: 97%;
  text-align: left;
  margin: 0.5em;
  padding: 1em;
  background-color: white;
  border: 1px #7389da solid;
  color: #7389da;
  border-radius: 10px;
  display: block;
  outline: none;
`;
const Name = styled.span`
  float: left;
  margin-top: 4px;
  margin-left: 1em;
`;

export default function SingleOption(props) {
  const [status, setStatus] = useState(0); //  0 = not answered; 1 = correct; 2 = incorrect
  const select = (event) => {
    props.onClick(event.target.value);
    if (event.target.value === props.winner) {
      console.log("correct");
      setStatus(1);
    } else {
      setStatus(2);
    }
  };
  return (
    <>
      {status === 2 && <WrongAnswer name={props.name}></WrongAnswer>}
      {status === 1 && <CorrectAnswer name={props.name}></CorrectAnswer>}
      {status === 0 && (
        <SingleAnswer onClick={select} value={props.name}>
          {props.name}
        </SingleAnswer>
      )}
    </>
  );
}
