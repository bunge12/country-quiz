import React from "react";
import styled from "styled-components";
const Button = styled.button`
  border-radius: 10px;
  background-color: gray;
  width: 40%;
`;

export default function Next(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}
