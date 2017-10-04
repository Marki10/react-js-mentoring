import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/search.sass';

class Search extends Component {
    constructor (props) {
        super(props);

        this.state = {
            searchValue: "",
            sortBy: "title"
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
    }
    
    handleSearchChange(event) {
        this.setState({searchValue: event.target.value});
    }
    
    handleSortBy(event) {
        this.setState({sortBy: event.target.value});
    }


    render() {
        return (
        <div className="search">
            <div className="search-title">Find your movie</div>
            <input type="text" className="search-input" value={this.state.searchValue} onChange={this.handleSearchChange}/>
            <div className="sorting-section">
                <div className="search-by">Search by</div>
                <button className="sorting-buttons selected" onClick={this.handleSortBy} value="title">Title</button>
                <button className="sorting-buttons" onClick={this.handleSortBy} value="director">Director</button>
                <Link to={"/search/"+this.state.sortBy+"="+this.state.searchValue} className="search-btn">Search</Link>
            </div>
        </div>
        );
    }
}

export default Search;
