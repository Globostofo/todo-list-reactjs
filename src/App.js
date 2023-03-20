import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            a_i: 0
        }
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul className='task-list'>{this.state.tasks.map((task) =>
                    <li key={task.id}><Task id={task.id} title={task.title} checked={task.done} /></li>
                )}</ul>
                <button onClick={() => this.setState({tasks: this.state.tasks.concat({
                    'id': this.state.a_i++,
                    'title': prompt("Title:"),
                    'done': false
                })})}>New task</button>
            </div>
        );
    }

}

export default App;
