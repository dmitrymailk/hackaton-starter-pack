import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MainScreen from "./MainScreen";

const defaultItem = {
  title: "Лекториум",
  backColor: "#264E70",
  textColor: "#FFF"
};

const anotherItem = {
  title: "Институты"
};

const crazyItem = {
  title: "Домашнее задание"
};

storiesOf("Main Screen", module).add("default", () => <MainScreen />);
