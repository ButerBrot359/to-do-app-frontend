import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Column.module.css";

function Column({title, tasks}) {
  return (
    <div className={styles.column}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
