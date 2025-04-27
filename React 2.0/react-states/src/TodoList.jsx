import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }
    let updateTodoValue= (event)=>{
        // console.log("Updating todo value: ", event.target.value);
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    }

    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add a new task" value={newTodo} onChange={updateTodoValue} /><br/><br/>
            <button onClick={addNewTodo}>Add</button>
            <br/><br/><br/><br/>
            <hr/>

            <h2>Tasks</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>&nbsp;
                        <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}