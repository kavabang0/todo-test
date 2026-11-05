import { useContext } from 'react'
import { TodosContext } from '@/features/todos/todosContext'

export const useTodos = () => {
  const context = useContext(TodosContext)

  if (!context) {
    throw new Error('useTodos должен вызываться внутри TodosProvider')
  }

  return context
}
