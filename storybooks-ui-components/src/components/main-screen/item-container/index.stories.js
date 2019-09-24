import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ItemContainer from "./ItemContainer";
import Favorite from "../../favorite/Favorite";

const components = [
  {
    Component: Favorite,
    title: "MOC-191",
    color: "#FADE00"
  },
  {
    Component: Favorite,
    title: "MOC-192",
    color: "#FADE00"
  },
  {
    Component: Favorite,
    title: "MOC-258",
    color: "#FADE00"
  }
];

storiesOf("Item Container", module).add("default", () => (
  <ItemContainer title="Избранное" components={components} />
));
