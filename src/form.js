import React, { useState } from 'react'

function Form({todos, setTodos}) {
    const [text,setText] = useState("");


    const inputHandler = (e) => {
        setText(e.target.value);
    }


    const addTodo = () => {
        if(text.trim() !== ""){
        todos = [...todos, {
            id : todos.length+1,
            info : text,
            isChecked : false
        }];
        setTodos(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    }


    return (
        <div>
            <div className="todo-action-container">
            <input type="text" className="todoInput" onChange={inputHandler} />
            <button className="todoAddButton" onClick={addTodo}>ADD</button>
            </div>
        </div>
    )
}

export default Form
