import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Schedule from "./Schedule";

storiesOf("Shedule", module).add("default", () => <Schedule />);
