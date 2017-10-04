import React, { Component } from 'react';
import '../styles/search.sass';

class Search extends Component {
    render() {
        return (
        <div className="search">
            <div className="search-title">Find your movie</div>
            <input type="text" className="search-input"/>
            <div className="sorting-section">
                <div className="search-by">Search by</div>
                <div className="sorting-buttons">Title</div>
                <div className="sorting-buttons">Director</div>
                <a href="/" className="search-btn">Search</a>
            </div>
        </div>
        );
    }
}

export default Search;
