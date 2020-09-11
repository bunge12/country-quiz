import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const Select = styled.select`
  background: none;
  color: #1d365c;
  border-color: #1d365c;
  padding: 0.25rem;
  border-radius: 0.5rem;
  outline: none;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default function NumberSelector(props) {
  const selectQuestions = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div>
      <Label htmlFor="number">Questions:</Label>
      <Select id="number" onChange={selectQuestions}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </Select>
    </div>
  );
}
