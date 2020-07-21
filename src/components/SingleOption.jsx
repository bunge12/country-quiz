import React from "react";
import styled from "styled-components";

const SingleAnswer = styled.button`
  width: 100%;
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
  let status = "";
  const select = (event) => {
    props.onClick(event.target.value);
    if (event.target.value === props.winner) {
      status = "correct";
    }
  };
  return (
    <SingleAnswer onClick={select} value={props.name} className={status}>
      {props.name}
    </SingleAnswer>
  );
}
