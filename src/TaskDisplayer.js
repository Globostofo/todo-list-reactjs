import React from "react";
import "./TaskDisplayer.css";
import TaskList from "./TaskList.js";

class TaskDisplayer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let displayTasks = Object.entries(this.props.tasks).filter((entry) => entry[1].title.toLowerCase().replace(' ', '').includes(this.props.searchFilter.toLowerCase().replace(' ', '')));
        if (this.props.displayType === 'done') displayTasks = displayTasks.filter((entry) => entry[1].done);
        else if (this.props.displayType === 'undone') displayTasks = displayTasks.filter((entry) => !entry[1].done);
        return (
            <div>
                <p>Display {displayTasks.length}/{Object.keys(this.props.tasks).length} task(s)</p>
                <TaskList tasks={displayTasks} onDone={this.props.onDone} onDelete={this.props.onDelete} />
            </div>
        );
    }

}

export default TaskDisplayer;