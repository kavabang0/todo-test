import { useState, type FormEvent } from 'react'
import { useTodos } from '@/features/todos/useTodos'
import { isValidTodoTitle } from '@/helpers/isValidTodoTitle'
import styles from './index.module.scss'

export const TodoForm = () => {
  const { addTodo } = useTodos()
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!addTodo(title)) {
      return
    }

    setTitle('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Новая задача"
        aria-label="Текст задачи"
        autoComplete="off"
      />
      <button className={styles.submit} type="submit" disabled={!isValidTodoTitle(title)}>
        Добавить
      </button>
    </form>
  )
}
