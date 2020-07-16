import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Game from "../components/Game";
import Question from "../components/Question";

storiesOf("App", module)
  .add("Game Container", () => <Game />)
  .add("Question", () => <Question />);
