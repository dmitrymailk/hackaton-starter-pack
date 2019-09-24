import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ListItem from "./ListItem";
// import Favorite from "../../../favorite";

// const defaultItem = {
//   components: [<Favorite title="MOC-191" />, <Favorite title="MOC-192" />]
// };

storiesOf("List item", module).add("default", () => <ListItem />);
