import React from "react";
import { storiesOf } from "@storybook/react";
import Favorite from "./Favorite";

const defaultItem = {
  title: "MOC-191",
  color: "#FADE00"
};

const anotherItem = {
  title: "MOC-192",
  color: "#FADE00"
};

const crazyItem = {
  title: "QWEQWEQWEQWEQWEQWEQWEQWE",
  color: "#CCC"
};

storiesOf("Favorite items", module)
  .add("default", () => <Favorite {...defaultItem} />)
  .add("another", () => <Favorite {...anotherItem} />)
  .add("crazy", () => <Favorite {...crazyItem} />);
