import React from "react";

class Task extends React.Component {

    render() {
        return (
            <div className="task">
                <p>{this.props.title}</p>
                <input type="checkbox" checked={this.props.checked} />
            </div>
        );
    }

}

export default Task;