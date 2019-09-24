import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AnotherProducts from "./AnotherProducts";

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

storiesOf("Another products", module)
  .add("Product 1", () => <AnotherProducts {...defaultItem} />)
  .add("Product 2", () => <AnotherProducts {...anotherItem} />)
  .add("Product 3", () => <AnotherProducts {...crazyItem} />);
