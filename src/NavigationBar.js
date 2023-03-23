import React from "react";

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search" value={this.props.searchBar} onChange={(event) => this.props.onSearchBarChange(event.target.value)} />
                <br />
                <label>Show </label>
                <select value={this.props.doneSelector} onChange={(event) => this.props.onDoneSelectorChange(event.target.value)}>
                    <option value="all">All</option>
                    <option value="done">Done only</option>
                    <option value="undone">Undone only</option>
                </select>
            </div>
        );
    }

}

export default NavigationBar;