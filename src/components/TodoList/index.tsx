import { TodoItem } from '@/components/TodoItem'
import { useTodos } from '@/features/todos/useTodos'
import styles from './index.module.scss'

export const TodoList = () => {
  const { filteredTodos, filter } = useTodos()

  if (filteredTodos.length === 0) {
    const emptyText =
      filter === 'completed'
        ? 'Нет выполненных задач'
        : filter === 'active'
          ? 'Нет активных задач'
          : 'Список задач пуст'

    return <p className={styles.empty}>{emptyText}</p>
  }

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
