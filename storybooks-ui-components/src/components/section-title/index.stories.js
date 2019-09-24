import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SectionTitle from "./SectionTitle";

const defaultItem = {
  title: "Избранное"
};

const anotherItem = {
  title: "Институты"
};

const crazyItem = {
  title: "Домашнее задание"
};

storiesOf("Section title", module)
  .add("Title 1", () => <SectionTitle {...defaultItem} />)
  .add("Title 2", () => <SectionTitle {...anotherItem} />)
  .add("Title 3", () => <SectionTitle {...crazyItem} />);
