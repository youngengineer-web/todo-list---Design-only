import React, { useContext, useState } from "react";
import { taskContext } from "./TaskContext";

const Form =()=>{
    const [task, setTask] = useState("");
    const {taskItem, setTaskItem } = useContext(taskContext)

    const handleSetTask = (e)=>{
        setTask(e.target.value)
    }

    const handleAddTask = (e)=>{
        setTask("");
        e.preventDefault();
        setTaskItem([...taskItem, {id:Math.random(), title:task, done:false}]);
    }

    return(
        <div className="form">
            <form onSubmit={handleAddTask}>
                <input type={Text} placeholder={"برنامه ات را اینجا بنویس"} onChange={handleSetTask}></input>
                <button>ثبت</button>
            </form>
        </div>
    )
}

export default Form;