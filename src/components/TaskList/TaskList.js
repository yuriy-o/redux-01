// 1. Імпортуємо хук
import { useSelector } from "react-redux";
// 2. Імпортуємо об'єкт значень фільтра
import { statusFilters } from "../../redux/constants";
import { getStatusFilter, getTasks } from "redux/selectors";

import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

// 5.1 Пишемо функцію обчислення текущего статусу фільтра
const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

console.log("getTasks", getTasks);

export const TaskList = () => {
  // 3. Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // 4. Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // 5.2 Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  // console.log("visibleTasks", visibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
