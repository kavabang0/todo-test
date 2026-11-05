import { useEffect, useMemo, useReducer, type PropsWithChildren } from 'react'
import type { ITodosContextValue, TodoFilter, TodoId } from '@/domain/interfaces'
import { TodosContext } from '@/features/todos/todosContext'
import { todosReducer } from '@/features/todos/todosReducer'
import { filterTodos } from '@/helpers/filterTodos'
import { isValidTodoTitle } from '@/helpers/isValidTodoTitle'
import { loadTodosState, saveTodosState } from '@/helpers/persistTodosState'

export const TodosProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(todosReducer, undefined, loadTodosState)

  useEffect(() => {
    saveTodosState(state)
  }, [state])

  const value = useMemo<ITodosContextValue>(() => {
    const addTodo = (title: string): boolean => {
      if (!isValidTodoTitle(title)) {
        return false
      }

      dispatch({ type: 'add', payload: { title } })
      return true
    }

    const toggleTodo = (id: TodoId) => {
      dispatch({ type: 'toggle', payload: { id } })
    }

    const removeTodo = (id: TodoId) => {
      dispatch({ type: 'remove', payload: { id } })
    }

    const setFilter = (filter: TodoFilter) => {
      dispatch({ type: 'setFilter', payload: { filter } })
    }

    return {
      todos: state.todos,
      filteredTodos: filterTodos(state.todos, state.filter),
      filter: state.filter,
      addTodo,
      toggleTodo,
      removeTodo,
      setFilter,
    }
  }, [state])

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}
