import { useSelector } from "react-redux";
import { getTasks } from "redux/selectors";

import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  // Забираємо зі стейту масив всіх завдань
  const tasks = useSelector(getTasks);

  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
