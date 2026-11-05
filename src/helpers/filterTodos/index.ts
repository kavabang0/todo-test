import type { ITodo, TodoFilter } from '@/domain/interfaces'

export const filterTodos = (todos: ITodo[], filter: TodoFilter): ITodo[] => {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    case 'all':
      return todos
  }
}
