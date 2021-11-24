import React from 'react'
import Todo from "./Todo";
function TodoList({todos, setTodos}) {
    return (
        <div>
            <div className="todo-container">
                {todos.length !== 0 ? todos.map(todo => 
                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                    
                ) : ""}
            </div>
        </div>
    )
}

export default TodoList
