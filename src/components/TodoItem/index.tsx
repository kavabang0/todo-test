import type { ITodoItemProps } from '@/domain/interfaces'
import { useTodos } from '@/features/todos/useTodos'
import styles from './index.module.scss'

export const TodoItem = ({ todo }: ITodoItemProps) => {
  const { toggleTodo, removeTodo } = useTodos()

  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={`${styles.title} ${todo.completed ? styles.titleCompleted : ''}`}>
          {todo.title}
        </span>
      </label>
      <button
        className={styles.remove}
        type="button"
        aria-label={`Удалить задачу «${todo.title}»`}
        onClick={() => removeTodo(todo.id)}
      >
        Удалить
      </button>
    </li>
  )
}
