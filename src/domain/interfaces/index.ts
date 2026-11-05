export type TodoId = string

export type TodoFilter = 'all' | 'active' | 'completed'

export interface ITodo {
  id: TodoId
  title: string
  completed: boolean
  createdAt: number
}

export interface ITodosState {
  todos: ITodo[]
  filter: TodoFilter
}

export type TodosAction =
  | { type: 'add'; payload: { title: string } }
  | { type: 'toggle'; payload: { id: TodoId } }
  | { type: 'remove'; payload: { id: TodoId } }
  | { type: 'setFilter'; payload: { filter: TodoFilter } }

export interface ITodosContextValue {
  todos: ITodo[]
  filteredTodos: ITodo[]
  filter: TodoFilter
  addTodo: (title: string) => boolean
  toggleTodo: (id: TodoId) => void
  removeTodo: (id: TodoId) => void
  setFilter: (filter: TodoFilter) => void
}

export interface ITodoFilterOption {
  value: TodoFilter
  label: string
}

export interface ITodoItemProps {
  todo: ITodo
}
