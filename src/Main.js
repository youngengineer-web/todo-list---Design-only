import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Title from "./Title";
import { taskContext } from "./TaskContext";

const Main = () => {
    const [taskItem, setTaskItem] = useState([
        {
            id: 1,
            title: "کار شماره 1",
            done: false
        },
        {
            id: 2,
            title: "کار شماره 2",
            done: true
        },
        {
            id: 3,
            title: "کار شماره 3",
            done: false
        }
    ]);

    return (
        <div className="main">
            <taskContext.Provider value={{ taskItem, setTaskItem }}>
                <Title />
                <Form />
                <List />
            </taskContext.Provider>
        </div>
    )
}

export default Main;