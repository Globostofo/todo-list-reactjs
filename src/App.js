import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: {},
            a_i: 0,
            taskBar: ''
        }
    }

    handleCreation() {
        this.setState({ tasks: { ...this.state.tasks, ...{ [this.state.a_i]: { 'title': this.state.taskBar, 'done': false } } }, a_i: this.state.a_i + 1, taskBar: '' })
    }

    handleDeletion(id) {
        let newMap = this.state.tasks;
        delete newMap[id];
        this.setState({ tasks: newMap });
    }

    createRenderedTask(id, task) {
        return <li key={id}><Task title={task.title} checked={task.done} onDelete={() => this.handleDeletion(id)} /></li>;
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul className='task-list'>{Object.entries(this.state.tasks).map((entry) => this.createRenderedTask(entry[0], entry[1]))}</ul>
                <input type="text" placeholder="My new task" value={this.state.taskBar} onChange={(event) => this.setState({ taskBar: event.target.value })} />
                <button onClick={() => this.handleCreation()}>Add Task</button>
            </div >
        );
    }

}

export default App;
