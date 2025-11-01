import React from 'react'
import styles from "./TaskCard.module.scss";

function TaskCard() {
    let task = { 
        title: "Тестовая таска",
        description: "Да просто Батыр Гей", 
        date: "01.11.2025"
    }
  return (
    <div className={styles.card}>
        <h3 className={styles.title}>{task.title}</h3>
        <p className={styles.description}>{task.description}</p>
        <span className={styles.date}>{task.date}</span>
    </div>
    
  )
}

export default TaskCard