import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider"

export default function TodoForm (){
    const {addTodo} = useTodoContext();
    const [todoItem, setTodoItem] = useState();

    const handleOnSubmit=(e)=>{
        e.preventDefault();

        if(!todoItem){
            return;
        }

        addTodo(todoItem);
        setTodoItem("");
    }


    return <form onSubmit={handleOnSubmit}>
        <input type="text" value = {todoItem}
        onChange={e=>setTodoItem(e.target.value)}/>
        <button type= "submit">추가</button>
    </form>
}