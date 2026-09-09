import AddTodo from '../app/comonents/addTodo'
import Todos from '../app/comonents/Todo'

function App() {
  
  return (
    <>
      <h1>Todo with redux-toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App