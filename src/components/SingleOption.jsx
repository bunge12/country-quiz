import React, { useState } from "react";
import styled from "styled-components";

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
`;

export default function SingleOption(props) {
  const [status, setStatus] = useState(0); //  0 = not answered; 1 = correct; 2 = incorrect
  const select = (event) => {
    props.onClick(event.target.value);
    if (event.target.value === props.winner) {
      setStatus(1);
    } else {
      setStatus(2);
    }
  };
  return (
    <SingleAnswer
      onClick={select}
      value={props.name}
      className={status === 1 ? "correct" : status === 2 ? "wrong" : ""}
    >
      {props.name}
    </SingleAnswer>
  );
}
