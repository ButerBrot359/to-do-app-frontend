import styles from "./Board.module.css";
import TaskCard from "../TaskCard/TaskCard";
import tasks  from "./mockData";
import Column from "../Column/Column";

function Board() {
  const columns = ["ToDo", "In Progress", "Completed", "Overdue"];
  return (
    <div className={styles.board}>
      {columns.map((col) => {
        const filteredTasks = tasks.filter((task) => task.status === col);
        return <Column title={col} tasks={filteredTasks} />;
      })}
    </div>
  );
}

export default Board;
