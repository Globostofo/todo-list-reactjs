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
        this.setState({ tasks: { ...this.state.tasks, ...{ [this.state.a_i++]: { 'title': this.state.taskBar, 'done': false } } }, taskBar: '' })
    }

    handleDeletion(task) {
        let newMap = this.state.tasks;
        delete newMap[task[0]];
        this.setState({ tasks: newMap });
    }

    createRenderedTask(task) {
        return <li key={task[0]}><Task title={task[1].title} checked={task[1].done} onDelete={() => this.handleDeletion(task[0])} /></li>;
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul className='task-list'>{Object.entries(this.state.tasks).map((task) => this.createRenderedTask(task))}</ul>
                <input type="text" placeholder="My new task" value={this.state.taskBar} onChange={(event) => this.setState({ taskBar: event.target.value })} />
                <button onClick={() => this.handleCreation()}>Add Task</button>
            </div >
        );
    }

}

export default App;
