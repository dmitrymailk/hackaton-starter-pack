import { configure } from "@storybook/react";
import "../src/style/normalize.css";
import "../src/style/index.sass";

const req = require.context("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
