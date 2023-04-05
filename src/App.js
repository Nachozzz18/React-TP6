import { TodoList } from "./TodoList";
import './App.css';

export function App() {
  return (
    <div className="contenedor">
      <div className="centrado">
        <h1>Tareas: </h1>
        <TodoList />
      </div>
    </div>
  );
}
