import { TODO_FILTER_OPTIONS } from '@/domain/constants'
import { useTodos } from '@/features/todos/useTodos'
import styles from './index.module.scss'

export const TodoFilters = () => {
  const { filter, setFilter } = useTodos()

  return (
    <div className={styles.list} role="group" aria-label="Фильтр задач">
      {TODO_FILTER_OPTIONS.map((option) => {
        const isActive = option.value === filter

        return (
          <button
            key={option.value}
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            type="button"
            aria-pressed={isActive}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
