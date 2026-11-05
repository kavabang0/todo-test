import type { ITodoFilterOption, TodoFilter } from '@/domain/interfaces'

export const TODOS_STORAGE_KEY = 'todo-test-zalog:state'

export const DEFAULT_TODO_FILTER: TodoFilter = 'all'

export const TODO_FILTER_OPTIONS: ITodoFilterOption[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
]
