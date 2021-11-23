import Form from "./form";
import './App.css';
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("todos")){
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  },[setTodos])

 

  return (
    <div className="App">
      <div className="app-container">
        <div className="todo-header"><h1>React Todo App</h1></div>
        <Form todos={todos} setTodos={setTodos} />

        <TodoList todos={todos} setTodos={setTodos}/>

        </div>
    </div>
  );
}

export default App;
