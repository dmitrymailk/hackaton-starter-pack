import React from "react";
import { storiesOf } from "@storybook/react";
import HomeworkItem from "./HomeworkItem";

const defaultItem = {
  title: "Алгебра и теория чисел"
};

const anotherItem = {
  title: "Геометрия и топология"
};

const crazyItem = {
  title: "Математический анализ"
};

storiesOf("Homework items", module)
  .add("default", () => <HomeworkItem {...defaultItem} />)
  .add("another", () => <HomeworkItem {...anotherItem} />)
  .add("crazy", () => <HomeworkItem {...crazyItem} />);
