import { TodosPage } from '@/pages/TodosPage'
import { TodosProvider } from '@/features/todos/TodosProvider'

const App = () => (
  <TodosProvider>
    <TodosPage />
  </TodosProvider>
)

export default App
