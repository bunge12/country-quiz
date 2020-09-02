import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CorrectAnswer from "./CorrectAnswer";
import WrongAnswer from "./WrongAnswer";

const SingleAnswer = styled.button`
  width: 92%;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
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

  useEffect(() => {
    if (props.showCorrect === props.answerIndex) {
      setStatus(1);
    }
  }, [props.showCorrect, props.answerIndex]);

  const select = (event) => {
    props.onClick(event.target.innerText);
    if (event.target.innerText === props.winner) {
      setStatus((prev) => 1);
    } else {
      setStatus(2);
    }
  };
  return (
    <>
      {status === 0 && (
        <SingleAnswer
          onClick={select}
          value={props.name}
          disabled={props.disabled}
        >
          <Name>{props.name}</Name>
        </SingleAnswer>
      )}
      {status === 1 && (
        <CorrectAnswer
          value={props.name}
          name={props.name}
          disabled={props.disabled}
        ></CorrectAnswer>
      )}
      {status === 2 && (
        <WrongAnswer
          value={props.name}
          name={props.name}
          disabled={props.disabled}
        ></WrongAnswer>
      )}
    </>
  );
}
