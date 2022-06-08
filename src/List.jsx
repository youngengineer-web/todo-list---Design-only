import React, { useContext } from "react";
import { taskContext } from "./TaskContext";

const List = () => {
    const { taskItem, setTaskItem } = useContext(taskContext);

    const handleSetDoneTask = (id) => {
        const index = taskItem.findIndex(t => t.id == id);
        let newTaskItem = [...taskItem];
        newTaskItem[index].done = !newTaskItem[index].done;
        setTaskItem(newTaskItem);
    }

    const handleDeletTask = (id) => {
        const newTask = taskItem.filter(t=>t.id!=id);
        setTaskItem(newTask)
    }

    if (taskItem.length) {
        return (
            <ul className="list">
                {
                    taskItem.map(t => (
                        <li style={{ background: t.done ? "#0f6" : "" }}>
                            <span>{t.title}</span>
                            <span className="listLeft">
                                {
                                    <i className={t.done? "fa fa-times-circle-o": "fa fa-check-circle-o"} onClick={()=>handleSetDoneTask(t.id) }></i>
                                    // t.done ? (
                                    //     <i className="fa fa-times-circle-o" onClick={() => handleSetDoneTask(t.id)}></i>
                                    // ) : (
                                    //     <i className="fa fa-check-circle-o" onClick={() => handleSetDoneTask(t.id)}></i>
                                    // )
                                }
                                <i className="fa fa-trash-o" onClick={()=>handleDeletTask(t.id)}></i>
                            </span>
                        </li>
                    ))
                }
            </ul>)
    } else {
        return <h3 className="noTask">هنوز چیزی ثبت نکرده اید!</h3>
    }

}

export default List;