import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Finished from "../components/Finished";
import Question from "../components/Question";
import Options from "../components/Options";
import SingleOption from "../components/SingleOption";
import StartAgain from "../components/StartAgain";

const oneQuestion = {
  question: "Port of Spain is the capital of",
  options: [
    "Kenya",
    "Tuvalu",
    "Falkland Islands (Malvinas)",
    "Trinidad and Tobago",
  ],
  winner: "Trinidad and Tobago",
};

storiesOf("App", module)
  .add("Finished Container", () => <Finished result="3" />)
  .add("Question", () => (
    <Question onClick={action("Selected")} data={oneQuestion} />
  ))
  .add("Options", () => (
    <Options onClick={action("Selected")} data={oneQuestion.options} />
  ))
  .add("Single Option", () => (
    <SingleOption onClick={action("Selected")} name="Kenya" />
  ))
  .add("Start Button", () => (
    <StartAgain onClick={action("Start Game")} text="Start Game" />
  ))
  .add("Try Again Button", () => (
    <StartAgain onClick={action("Try Again")} text="Try Again" />
  ));
