interface Todo {
  id: number
  description: string
  completed: boolean
}

const todos: Todo[] = [
  { id: 1, description: 'Buy groceries', completed: false },
  { id: 2, description: 'Walk the dog', completed: true },
]

let todoId = todos.length

function addTodo(todos: Todo[], description: string) {
  const newTodo: Todo = {
    id: ++todoId,
    description,
    completed: false,
  }

  return [...todos, newTodo]
}

function toggleTodo(todos: Todo[], id: number) {
  return todos.map((todo) => {
    if (todo.id !== id) return todo

    return {
      ...todo,
      completed: !todo.completed,
    }
  })
}

function removeTodo(todos: Todo[], id: number) {
  return todos.filter((todo) => todo.id !== id)
}

function updateTodoDescription(todos: Todo[], id: number, description: string) {
  return todos.map((todo) => {
    if (todo.id !== id) return todo

    return {
      ...todo,
      description,
    }
  })
}

// const updatedTodos = addTodo(todos, 'Pet the cat')
// const updatedTodos = toggleTodo(todos, 1)
// const updatedTodos = removeTodo(todos, 1)
const updatedTodos = updateTodoDescription(
  todos,
  1,
  'Buy groceries and cook dinner'
)

console.log(updatedTodos)
