import React from 'react';
import './App.css';
import Task from "./Task.js"

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <Task title="ma tache 1" checked="" />
                <Task title="ma tache 2" checked="" />
                <Task title="ma tache 3" checked="" />
            </div>
        );
    }

}

export default App;
