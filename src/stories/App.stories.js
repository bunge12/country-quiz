import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Finished from "../components/Finished";
import Question from "../components/Question";
import Options from "../components/Options";
import CorrectAnswer from "../components/CorrectAnswer";
import SingleOption from "../components/SingleOption";
import StartAgain from "../components/StartAgain";
import NumberSelector from "../components/NumberSelector";
import Scoreboard from "../components/Scoreboard";

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

const flagQuestion = {
  question:
    "https://restcountries.eu/data/cok.svg&Which country does this flag belong to?",
  options: [
    "Kenya",
    "Tuvalu",
    "Falkland Islands (Malvinas)",
    "Trinidad and Tobago",
  ],
  winner: "Trinidad and Tobago",
};

storiesOf("App", module)
  .add("Finished Container", () => (
    <Finished
      result="3"
      quantity="4"
      scores={[
        { score: 0, quantity: 4 },
        { score: 3, quantity: "8" },
      ]}
    />
  ))
  .add("Capital Question", () => (
    <Question onClick={action("Selected")} data={oneQuestion} />
  ))
  .add("Picture Question", () => (
    <Question onClick={action("Selected")} data={flagQuestion} />
  ))
  .add("Options", () => (
    <Options onClick={action("Selected")} data={oneQuestion.options} />
  ))
  .add("Single Option", () => (
    <SingleOption onClick={action("Selected")} name="Kenya" />
  ))
  .add("Correct Option", () => <CorrectAnswer name="Kenya" />)
  .add("Start Button", () => (
    <StartAgain onClick={action("Start Game")} text="Start Game" />
  ))
  .add("Try Again Button", () => (
    <StartAgain onClick={action("Try Again")} text="Try Again" />
  ))
  .add("Selector", () => <NumberSelector onChange={action("Changed")} />)
  .add("Empty Scoreboard", () => <Scoreboard data={[]} />)
  .add("Full Scoreboard", () => (
    <Scoreboard
      data={[
        { score: 0, quantity: 4 },
        { score: 3, quantity: "8" },
      ]}
    />
  ));
