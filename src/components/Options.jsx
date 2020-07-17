import React from "react";
import styled from "styled-components";
import SingleOption from "./SingleOption";

export default function Options(props) {
  const list = props.data.map((each) => (
    <SingleOption
      onClick={props.onClick}
      name={each}
      key={each}
      winner={props.winner}
    ></SingleOption>
  ));
  return list;
}
