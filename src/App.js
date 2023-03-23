import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        let tasks = localStorage.getItem('tasks');
        let autoIncr = localStorage.getItem('autoIncr');
        this.state = {
            tasks: tasks ? JSON.parse(tasks) : {},
            autoIncr: autoIncr ? JSON.parse(autoIncr) : 0,
            searchBar: '',
            taskBar: ''
        }
    }

    saveStateInLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        localStorage.setItem('autoIncr', JSON.stringify(this.state.autoIncr));
    }

    createRenderableTask(id, task) {
        return <li key={id}><Task title={task.title} done={task.done} onDone={() => this.handleDoneClicked(id)} onDelete={() => this.handleTaskDeletion(id)} /></li>;
    }

    handleTaskCreation() {
        if (0 < this.state.taskBar.length && this.state.taskBar.length <= 32)
            this.setState({ tasks: { ...this.state.tasks, ...{ [this.state.autoIncr]: { 'title': this.state.taskBar, 'done': false } } }, autoIncr: this.state.autoIncr + 1, taskBar: '' })
    }

    handleDoneClicked(id) {
        let newMap = this.state.tasks;
        newMap[id].done = !newMap[id].done;
        this.setState({ tasks: newMap });
    }

    handleTaskDeletion(id) {
        let newMap = this.state.tasks;
        delete newMap[id];
        this.setState({ tasks: newMap });
    }

    handleDoneDeletion() {
        let newMap = this.state.tasks;
        Object.entries(newMap).forEach((entry) => {
            if (entry[1].done) delete newMap[entry[0]];
        })
        this.setState({ tasks: newMap })
    }

    render() {
        this.saveStateInLocalStorage();
        let displayTasks = Object.entries(this.state.tasks).filter((entry) => entry[1].title.toLowerCase().replace(' ', '').includes(this.state.searchBar.toLowerCase().replace(' ', '')));
        return (
            <div>
                <h1>To Do List</h1>
                <input type="text" placeholder="Search" value={this.state.searchBar} onChange={(event) => this.setState({ searchBar: event.target.value })} />
                <p>Display {displayTasks.length}/{Object.keys(this.state.tasks).length} task(s)</p>
                <ul className='task-list'>{displayTasks.map((entry) => this.createRenderableTask(entry[0], entry[1]))}</ul>
                <input type="text" placeholder="My new task" value={this.state.taskBar} onChange={(event) => this.setState({ taskBar: event.target.value })} />
                <button onClick={() => this.handleTaskCreation()}>Add Task</button>
                <br /><button onClick={() => this.handleDoneDeletion()}>Delete done tasks</button>
            </div >
        );
    }

}

export default App;
