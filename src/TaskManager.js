import React from "react";

class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="My new task" value={this.props.newTaskBar} onChange={(event) => this.props.onNewTaskBarChange(event.target.value)} />
                <button onClick={this.props.onTaskCreation}>Add Task</button>
                <br />
                <button onClick={this.props.onDeleteDoneTasks}>Delete done tasks</button>
            </div>
        );
    }

}

export default Task;