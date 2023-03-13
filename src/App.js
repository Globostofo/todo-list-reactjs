import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                <Task title="my task 1" checked="" />,
                <Task title="my task 2" checked="" />,
                <Task title="my task 3" checked="" />
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul>{this.state.tasks.map((task) => <li key={task.props.title}>{task}</li>)}</ul>
            </div>
        );
    }

}

export default App;
