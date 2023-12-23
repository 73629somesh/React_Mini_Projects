import css from "./ToDo.css"
import { useState } from "react"

export default function ToDo() {

    let [todos, setTodos] = useState(["Enter task"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("")
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
       <center>
           <div className="ToDo" >
               <h1>To Do App</h1>
            <input className="text" placeholder="Enter your task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br><br></br>

            <button className="button" onClick={addNewTask} width="50">Add Task</button>
            <br></br><br></br>
            <hr></hr>
            <ul>
                {todos.map((todo) => (
                    <li>{todo} </li>
                ))}
            </ul>
        </div>
        </center>
    );
}