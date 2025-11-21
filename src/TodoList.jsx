import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
export default function TodoList() {
    let [todos, setTodos]= useState([{task: "Sample Todo", id: uuidv4(), isdone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addnewTask=()=>{
        setTodos(prevTodos=>[...prevTodos, {task: newTodo, id: uuidv4()}]);
        setNewTodo("");
    }
    let updatetodovalue=(e)=>{
        setNewTodo(e.target.value);
        
    }
    let deleteTask=(id)=>{
        let updatedTodos=todos.filter((todo)=> todo.id !== id);
        setTodos(updatedTodos);
    }
    let uppercaseAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>({
                ...todo, task: todo.task.toUpperCase(),
            }))
        );
    }
    let uppercaseOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>
                todo.id === id ? {...todo, task: todo.task.toUpperCase()} : todo
            )
        );
    }
    let markasCompleted=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>
                todo.id === id ? {...todo, isdone: true} : todo
            )

        );
    }
    return (
        <div>
            <input placeholder='Add Task' value={newTodo} onChange={updatetodovalue}></input>
            &nbsp;
            <button style={{backgroundColor:'green'}} onClick={addnewTask}>Add Task</button>
            <hr></hr>
            <h3>Todo Items</h3>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                   <span style={{textDecoration: todo.isdone ? "line-through" : "none"}}>{todo.task}</span>
                     &nbsp; &nbsp;
                   <button style={{backgroundColor:'red'}}  height="2px" width="10px" onClick={()=>deleteTask(todo.id)}>Delete</button>
                   <button style={{backgroundColor:'orange'}}  height="2px" width="10px" onClick={()=>uppercaseOne(todo.id)}>Uppercase</button> 
                   <button style={{backgroundColor:'blue'}}  height="2px" width="10px" onClick={()=>markasCompleted(todo.id)}  textDecoration="line-through">Completed</button>
                </li>
            ))}
        </ul>
        <br></br>
        <button onClick={uppercaseAll}>Uppercase All</button>
        </div>
    );
}