import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, { text: todo, completed: false }]);
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(e.target.todo.value);
          e.target.todo.value = "";
        }}
      >
        <input type="text" name="todo" placeholder="Agregar tarea" required/>
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}