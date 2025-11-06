import React from "react";
import styles from "./TaskCard.module.scss";

function TaskCard() {
  let task = {
    title: "Тестовая таска на проверку",
    description: "Да просто Батыр Гей",
    time: "01.11.2025",
  };
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.star}>⭐</span>
        <span className={styles.date}></span>
        <button className={styles.arrow}></button>
      </div>
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.bot}>
        <span className={styles.time}>{task.time}</span>
        <div className={styles.avatars}>
          <img src="https://i.pravatar.cc/24?img=1" alt="user1" />
          <img src="https://i.pravatar.cc/24?img=2" alt="user2" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
