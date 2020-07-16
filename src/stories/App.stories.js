import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Game from "../components/Game";
import Question from "../components/Question";
import Options from "../components/Options";
import SingleOption from "../components/SingleOption";

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
  .add("Game Container", () => <Game />)
  .add("Question", () => <Question data={oneQuestion} />)
  .add("Options", () => <Options data={oneQuestion.options} />)
  .add("Single Option", () => <SingleOption name="Kenya" />);
