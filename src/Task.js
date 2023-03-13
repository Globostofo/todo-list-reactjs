import React from "react";
import "./Task.css"

function Task(props) {

    return (
        <div className="task">
            <label>{props.title}</label>
            <input type="checkbox" checked={props.checked} />
        </div>
    );

}

export default Task;