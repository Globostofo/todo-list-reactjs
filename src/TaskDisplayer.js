import React from "react";
import "./TaskDisplayer.css";
import Task from "./Task.js";

class TaskDisplayer extends React.Component {

    constructor(props) {
        super(props);
    }

    createRenderableTask(id, task) {
        return <li key={id}><Task title={task.title} done={task.done} onDone={() => this.props.onDone(id)} onDelete={() => this.props.onDelete(id)} /></li>;
    }

    render() {
        let displayTasks = Object.entries(this.props.tasks).filter((entry) => entry[1].title.toLowerCase().replace(' ', '').includes(this.props.searchFilter.toLowerCase().replace(' ', '')));
        if (this.props.displayType === 'done') displayTasks = displayTasks.filter((entry) => entry[1].done);
        else if (this.props.displayType === 'undone') displayTasks = displayTasks.filter((entry) => !entry[1].done);
        return (
            <div>
                <p>Display {displayTasks.length}/{Object.keys(this.props.tasks).length} task(s)</p>
                <ul className='task-list'>{displayTasks.map((entry) => this.createRenderableTask(entry[0], entry[1]))}</ul>
            </div>
        );
    }

}

export default TaskDisplayer;