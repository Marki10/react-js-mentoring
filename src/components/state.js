import React, { Component } from 'react';
import '../styles/state.sass';

class State extends Component {
    constructor (props) {
        super(props);

        this.state = {
            sortBy: "releasedate"
        }

        this.handleSortBy = this.handleSortBy.bind(this);
    }

    handleSortBy(event) {
        this.setState({sortBy: event.target.value});
    }

    render() {
        return (
            <section className="container state">
                <div className="left-side">{"7"} movies found</div>
                <div className="right-side">
                    <div className="item">Sort by</div>
                    <button className="item" onClick={this.handleSortBy} value="releasedate">release date</button>
                    <button className="item" onClick={this.handleSortBy} value="rating">rating</button>
                </div>
            </section>
        );
    }
}
        
export default State;
