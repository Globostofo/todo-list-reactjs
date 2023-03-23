import React from "react";
import Task from "./Task.js";

class TaskList extends React.Component {

    constructor(props) {
        super(props);
    }

    createRenderableTask(id, task) {
        return <li key={id}><Task title={task.title} done={task.done} onDone={() => this.props.onDone(id)} onDelete={() => this.props.onDelete(id)} /></li>;
    }

    render() {
        return <ul className='task-list'>{this.props.tasks.map((entry) => this.createRenderableTask(entry[0], entry[1]))}</ul>;
    }

}

export default TaskList;