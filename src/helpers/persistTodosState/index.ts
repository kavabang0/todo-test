import { DEFAULT_TODO_FILTER, TODOS_STORAGE_KEY } from '@/domain/constants'
import type { ITodo, ITodosState, TodoFilter } from '@/domain/interfaces'

const TODO_FILTERS: TodoFilter[] = ['all', 'active', 'completed']

const isTodoFilter = (value: unknown): value is TodoFilter =>
  typeof value === 'string' && TODO_FILTERS.includes(value as TodoFilter)

const isTodo = (value: unknown): value is ITodo => {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const todo = value as Record<string, unknown>

  return (
    typeof todo.id === 'string' &&
    typeof todo.title === 'string' &&
    typeof todo.completed === 'boolean' &&
    typeof todo.createdAt === 'number'
  )
}

export const loadTodosState = (): ITodosState => {
  try {
    const raw = localStorage.getItem(TODOS_STORAGE_KEY)

    if (!raw) {
      return { todos: [], filter: DEFAULT_TODO_FILTER }
    }

    const parsed: unknown = JSON.parse(raw)

    if (typeof parsed !== 'object' || parsed === null) {
      return { todos: [], filter: DEFAULT_TODO_FILTER }
    }

    const data = parsed as Record<string, unknown>
    const todos = Array.isArray(data.todos) ? data.todos.filter(isTodo) : []
    const filter = isTodoFilter(data.filter) ? data.filter : DEFAULT_TODO_FILTER

    return { todos, filter }
  } catch {
    return { todos: [], filter: DEFAULT_TODO_FILTER }
  }
}

export const saveTodosState = (state: ITodosState): void => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(state))
}
