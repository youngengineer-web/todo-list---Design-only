import React from "react";  
import Form from "./Form";
import List from "./List";
import Title from "./Title";

const Main = () =>{
    return(
        <div className="main">
            <Title/>
            <Form/>
            <List/>
        </div>
    )
}

export default Main;