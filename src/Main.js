import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Title from "./Title";
import { taskContext } from "./TaskContext";

const Main = () => {
    const [taskItem, setTaskItem] = useState(
        {
            id: 1,
            title: "کار شماره 1",
        },
        {
            id: 2,
            title: "کار شماره 2",
        },
        {
            id: 3,
            title: "کار شماره 3",
        }
    );

    return (
        <div className="main">
            <taskContext.provider value={{ taskItem, setTaskItem }}>
                <Title />
                <Form />
                <List />
            </taskContext.provider>
        </div>
    )
}

export default Main;