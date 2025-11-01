import styles from './Board.module.scss'
import TaskCard from '../TaskCard/TaskCard'

function Board() {
  return (
    <div className={styles.board}>
        <TaskCard />
    </div>
  )
}

export default Board