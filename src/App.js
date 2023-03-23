import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar.js';
import TaskDisplayer from "./TaskDisplayer.js";

class App extends React.Component {

    constructor(props) {
        super(props);
        let tasks = localStorage.getItem('tasks');
        let autoIncr = localStorage.getItem('autoIncr');
        this.state = {
            tasks: tasks ? JSON.parse(tasks) : {},
            autoIncr: autoIncr ? JSON.parse(autoIncr) : 0,
            searchBar: '',
            doneSelector: 'all',
            taskBar: ''
        }
    }

    saveStateInLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        localStorage.setItem('autoIncr', JSON.stringify(this.state.autoIncr));
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
        return (
            <div>
                <h1>To Do List</h1>
                <NavigationBar searchBar={this.state.searchBar} onSearchBarChange={(text) => this.setState({ searchBar: text })}
                    doneSelector={this.state.doneSelector} onDoneSelectorChange={(selection) => this.setState({ doneSelector: selection })} />
                <TaskDisplayer tasks={this.state.tasks} searchFilter={this.state.searchBar} displayType={this.state.doneSelector}
                    onDone={(id) => this.handleDoneClicked(id)} onDelete={(id) => this.handleTaskDeletion(id)} />
                <input type="text" placeholder="My new task" value={this.state.taskBar} onChange={(event) => this.setState({ taskBar: event.target.value })} />
                <button onClick={() => this.handleTaskCreation()}>Add Task</button>
                <br /><button onClick={() => this.handleDoneDeletion()}>Delete done tasks</button>
            </div >
        );
    }

}

export default App;
