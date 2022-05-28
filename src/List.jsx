import React, { useContext } from "react";
import { taskContext } from "./TaskContext";

const List =()=>{
    const item = useContext (taskContext);
    console.log(item.taskItem);
    return(
        <div className="list">
            <div className="listRight">
                <span>کار شماره یک</span>
            </div>
            <div className="listLeft">
                <i className="fa fa-check-circle-o"></i>
                <i className="fa fa-times-circle-o"></i>
                <i className="fa fa-trash-o"></i>
            </div>
        </div>
    )
}

export default List;