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
                <div className="options-bar">
                    <div className="done-btn">
                        <label>Done</label>
                        <input type="checkbox" checked={this.state.done} onChange={() => this.setState({ done: !this.state.done })} />
                    </div>
                    <button className="del-btn" onClick={this.props.onDelete}>Delete</button>
                </div>
            </div>
        );
    }

}

export default Task;