import type { ITodosState, TodosAction } from '@/domain/interfaces'
import { createTodo } from '@/helpers/createTodo'
import { isValidTodoTitle } from '@/helpers/isValidTodoTitle'

export const todosReducer = (state: ITodosState, action: TodosAction): ITodosState => {
  switch (action.type) {
    case 'add': {
      if (!isValidTodoTitle(action.payload.title)) {
        return state
      }

      return {
        ...state,
        todos: [createTodo(action.payload.title), ...state.todos],
      }
    }
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }
    case 'remove':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    case 'setFilter':
      return {
        ...state,
        filter: action.payload.filter,
      }
  }
}
