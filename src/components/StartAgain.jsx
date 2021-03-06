import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background: none;
  color: #1d365c;
  border-color: #1d365c;
  padding: 1em;
  border-radius: 1em;
  width: 40%;
  outline: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export default function StartAgain(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}
