import { TodoFilters } from '@/components/TodoFilters'
import { TodoForm } from '@/components/TodoForm'
import { TodoList } from '@/components/TodoList'
import { useTodos } from '@/features/todos/useTodos'
import styles from './index.module.scss'

export const TodosPage = () => {
  const { todos } = useTodos()
  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Задачи</h1>
          <p className={styles.subtitle}>
            {todos.length === 0
              ? 'Добавьте первую задачу'
              : `Активных: ${activeCount} из ${todos.length}`}
          </p>
        </header>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </section>
    </main>
  )
}
