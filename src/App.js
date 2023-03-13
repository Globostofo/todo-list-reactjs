import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                <Task title="my task 1" done={false} />,
                <Task title="my task 2" done={false} />,
                <Task title="my task 3" done={false} />
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul className='task-list'>{this.state.tasks.map((task) => <li key={task.props.title}>{task}</li>)}</ul>
                <button onClick={() => this.setState({tasks: this.state.tasks.concat(<Task title={prompt("Title:")} done="" />)})}>New task</button>
            </div>
        );
    }

}

export default App;
