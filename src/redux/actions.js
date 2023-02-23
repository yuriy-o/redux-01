import { nanoid } from "nanoid";

export const addTask = text => {
  return {
    type: "taski/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: "taski/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: "taski/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
