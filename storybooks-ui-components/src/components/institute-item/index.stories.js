import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import InstituteItem from "./InstituteItem";

// export const task = {
//   id: "1",
//   title: "Test Task",
//   state: "TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask: action("onArchiveTask")
// };

const defaultItem = {
  title: "ИМИТ",
  color: "#FADE00"
};

const anotherItem = {
  title: "ИФМК",
  color: "#FFAF38"
};

const crazyItem = {
  title: "QWEQWEQWEQWEQWEQWEQWEQWE",
  color: "#CCC"
};

storiesOf("Institute item", module)
  .add("default", () => <InstituteItem {...defaultItem} />)
  .add("another", () => <InstituteItem {...anotherItem} />)
  .add("crazy", () => <InstituteItem {...crazyItem} />);

// .add("pinned", () => (
//   <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
// ))
// .add("archived", () => (
//   <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
// ));

// import React from "react";
// import { storiesOf } from "@storybook/react";

// import TaskList from "./TaskList";
// import { task, actions } from "./Task.stories";

// export const defaultTasks = [
//   { ...task, id: "1", title: "Task 1" },
//   { ...task, id: "2", title: "Task 2" },
//   { ...task, id: "3", title: "Task 3" },
//   { ...task, id: "4", title: "Task 4" },
//   { ...task, id: "5", title: "Task 5" },
//   { ...task, id: "6", title: "Task 6" }
// ];

// export const withPinnedTasks = [
//   ...defaultTasks.slice(0, 5),
//   { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
// ];

// storiesOf("TaskList", module)
//   .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
//   .add("default", () => <TaskList tasks={defaultTasks} {...actions} />)
//   .add("withPinnedTasks", () => (
//     <TaskList tasks={withPinnedTasks} {...actions} />
//   ))
//   .add("loading", () => <TaskList loading tasks={[]} {...actions} />)
//   .add("empty", () => <TaskList tasks={[]} {...actions} />);

// import React from "react";
// import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

// import Task from "./Task";

// export const task = {
//   id: "1",
//   title: "Test Task",
//   state: "TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask: action("onArchiveTask")
// };

// storiesOf("Task", module)
//   .add("default", () => <Task task={task} {...actions} />)
//   .add("pinned", () => (
//     <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
//   ))
//   .add("archived", () => (
//     <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
//   ));
