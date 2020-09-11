import React from "react";
import styled from "styled-components";

const Name = styled.span`
  float: left;
  margin-top: 4px;
  margin-left: 1em;
`;

export default function Scoreboard(props) {
  const list = props.data.map((each) => (
    <ul>
      {each.score}/{each.quantity}
    </ul>
  ));
  return <div>{list}</div>;
}
