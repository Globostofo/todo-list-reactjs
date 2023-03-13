import React from "react";
import "./Task.css"

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = { done: props.done }
    }

    render() {
        return (
            <div className="task">
                <label>{this.props.title}</label>
                <label>Done</label>
                <input type="checkbox" checked={this.state.done} onChange={() => this.setState({done: !this.state.done})} />
            </div>
        );
    }

}

export default Task;