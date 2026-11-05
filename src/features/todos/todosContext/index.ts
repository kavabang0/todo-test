import { createContext } from 'react'
import type { ITodosContextValue } from '@/domain/interfaces'

export const TodosContext = createContext<ITodosContextValue | null>(null)
