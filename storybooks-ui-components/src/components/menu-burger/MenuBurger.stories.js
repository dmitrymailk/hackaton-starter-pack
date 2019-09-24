import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MenuBurger from "./MenuBurger";

storiesOf("Menu Burger", module).add("default", () => <MenuBurger />);
