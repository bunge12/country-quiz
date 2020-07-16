import React from "react";
import styled from "styled-components";

const SingleAnswer = styled.button`
  border: 1px #7389da solid;
  color: #7389da;
  border-radius: 10px;
  display: block;
`;

export default function SingleOption(props) {
  const select = (event) => props.onClick(event.target.value);
  return (
    <SingleAnswer onClick={select} value={props.name}>
      {props.name}
    </SingleAnswer>
  );
}
