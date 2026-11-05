import type { ITodo } from '@/domain/interfaces'

export const createTodo = (title: string): ITodo => ({
  id: crypto.randomUUID(),
  title: title.trim(),
  completed: false,
  createdAt: Date.now(),
})
