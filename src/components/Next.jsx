import React from "react";
import styled from "styled-components";
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #f9a827;
  border: none;
  padding: 1em;
  font-weight: 700;
  width: 40%;
`;

export default function Next(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}
