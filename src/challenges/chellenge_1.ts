// Apply TS to this JS file
// Add interface to todoItems array structure (because it is array you need to apply interface to
// the array items)
// create Enum for the status
// apply functions to the parameter functions and return values (use generic parameter to define
// getNextId() function)


const chellenge1 = () => {
  const todoItems = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
  ]

  function addTodoItem(todo) {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: "todo",
    }

    todoItems.push(newTodo)

    return newTodo
  }

  function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
  }

  const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

  console.log(JSON.stringify(newTodo))
}