import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSortBy } from './storage/actions';
import '../styles/filter.sass';

class Filter extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <section className="container filter">
                <div className="left-side">{this.props.lenght} movies found</div>
                <div className="right-side">
                    <div className="item">Sort by</div>
                    <button className="item" onClick={() => { this.props.setSortBy('release_date') }}>release date</button>
                    <button className="item" onClick={() => { this.props.setSortBy('vote_average') }}>rating</button>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSortBy: (value) => {
        dispatch(setSortBy(value));
    } 
});

export default connect(null, mapDispatchToProps)(Filter);
