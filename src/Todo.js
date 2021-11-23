import React from 'react'

function Todo({todo, todos, setTodos}) {

    const removeTodo = () => {
        todos = todos.filter(t => {return todo.id !== t.id});
    
        setTodos(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const checkTodo = (e) => {
        todo.isChecked = todo.isChecked ? false : true;
        setTodos(todos);
        
       e.target.parentElement.classList.toggle("checked");
       localStorage.setItem("todos", JSON.stringify(todos));
    }

    return (
        <div className={todo.isChecked ? "todo-list-item checked" : "todo-list-item"}>
            <div className="todo-info" onClick={checkTodo}>
                {todo.info}
                </div>

                <div className="todo-remove"><button onClick={removeTodo}>X</button></div>
        </div>
    )
}

export default Todo
