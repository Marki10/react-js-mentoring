import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';

// Actions
import { setSearchBy, searchQuery, getMovies } from './storage/actions';

// Data
import { movies } from './storage/data';

import '../styles/search.sass';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchValue: "200",
            active: true
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    
    handleSearchChange(event) {
        this.setState({searchValue: event.target.value});
    }

    render() {
        return (
        <div className="search">
            <div className="search-title">Find your movie</div>
            <input type="text" className="search-input" value={this.state.searchValue} onChange={this.handleSearchChange}/>
            <div className="sorting-section">
                <div className="search-by">Search by</div>
                <button className={this.state.active ? 'sorting-buttons selected' : 'sorting-buttons'} onClick={() => { this.props.setSearchBy('title'); this.setState({active: true}) }} value="title">Title</button>
                <button className={!this.state.active ? 'sorting-buttons selected' : 'sorting-buttons'} onClick={() => { this.props.setSearchBy('director'); this.setState({active: false}) }} value="director">Director</button>
                <Link to={"/search/"+this.props.searchby+"="+this.state.searchValue} className="search-btn" onClick={() => { this.props.getMovies(this.state.searchValue)} }>Search</Link>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducer,
        sortby: state.sortByReducer,
        searchby: state.searchByReducer,
        searchquery: state.searchQueryReducer
    };
};

function getResults(query) {
    return axios.get("https://api.themoviedb.org/3/search/movie?api_key=37a2d4fc32fa08c8e18ab024745d3a7e&query=" + query);
}

const mapDispatchToProps = (dispatch) => ({
    setSearchBy: (value) => {
        dispatch(setSearchBy(value));
    },
    searchQuery: (value) => {
        dispatch(searchQuery(value));
    },
    getMovies(query) {
        return getResults(query).then(response => {
            dispatch({
                type: "GET_MOVIES",
                payload: response.data
            });            
        });
    } 
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
