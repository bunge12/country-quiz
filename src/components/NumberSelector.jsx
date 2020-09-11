import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export default function NumberSelector(props) {
  const selectQuestions = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <Container>
      <select onChange={selectQuestions}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>
    </Container>
  );
}
