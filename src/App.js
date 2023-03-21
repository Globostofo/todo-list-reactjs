import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: {},
            autoIncr: 0,
            taskBar: ''
        }
    }

    createRenderableTask(id, task) {
        return <li key={id}><Task title={task.title} checked={task.done} onDelete={() => this.handleTaskDeletion(id)} /></li>;
    }

    handleTaskCreation() {
        this.setState({ tasks: { ...this.state.tasks, ...{ [this.state.autoIncr]: { 'title': this.state.taskBar, 'done': false } } }, autoIncr: this.state.autoIncr + 1, taskBar: '' })
    }

    handleTaskDeletion(id) {
        let newMap = this.state.tasks;
        delete newMap[id];
        this.setState({ tasks: newMap });
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul className='task-list'>{Object.entries(this.state.tasks).map((entry) => this.createRenderableTask(entry[0], entry[1]))}</ul>
                <input type="text" placeholder="My new task" value={this.state.taskBar} onChange={(event) => this.setState({ taskBar: event.target.value })} />
                <button onClick={() => this.handleTaskCreation()}>Add Task</button>
            </div >
        );
    }

}

export default App;
