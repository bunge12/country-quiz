import React, { useState, useEffect } from "react";
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
  // useEffect(() => {
  //   console.log("options updated");
  //   setTimeout(() => {
  //     setStatus(0);
  //   }, 40000);
  // }, [props]);
  useEffect(() => {
    // console.log("ShowCorrect updated", props.showCorrect, props.answerIndex);
    if (props.showCorrect === props.answerIndex) {
      setStatus(1);
    }
  }, [props.showCorrect]);

  const select = (event) => {
    props.onClick(event.target.innerText);
    console.log(event.target.innerText);
    if (event.target.innerText === props.winner) {
      console.log("correct");
      setStatus((prev) => 1);
    } else {
      console.log(`${event.target.innerText} does not equal ${props.winner}`);
      setStatus(2);
    }
  };
  return (
    <>
      {status === 0 && (
        <SingleAnswer onClick={select} value={props.name}>
          <Name>{props.name}</Name>
        </SingleAnswer>
      )}
      {status === 1 && (
        <CorrectAnswer value={props.name} name={props.name}></CorrectAnswer>
      )}
      {status === 2 && (
        <WrongAnswer value={props.name} name={props.name}></WrongAnswer>
      )}
    </>
  );
}
