// Core
import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import Header from './components/header';
import FilmsList from './components/filmslist';
import Footer from './components/footer';

// Actions
import { setSortBy, getMovies } from './components/storage/actions';

// Sass / Css
import './App.sass';

class App extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <div className="App">
                <Header/>
                <FilmsList films={this.props.movies.results} sortby={this.props.sortby}/>
                <Footer />
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

const mapDispatchToProps = (dispatch) => ({
    setSortBy: (value) => {
        dispatch(setSortBy(value));
    },
    getMovies: (query) => {
        dispatch(getMovies(query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
