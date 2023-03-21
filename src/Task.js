import React from "react";
import "./Task.css"

class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task">
                <label>{this.props.title}</label>
                <div className="options-bar">
                    <div className="done-btn">
                        <label>Done</label>
                        <input type="checkbox" checked={this.props.done} onChange={this.props.onDone} />
                    </div>
                    <button className="del-btn" onClick={this.props.onDelete}>Delete</button>
                </div>
            </div>
        );
    }

}

export default Task;