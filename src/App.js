// Core
import React, { Component } from 'react';

// Components
import Header from './components/header';
import FilmsList from './components/filmslist';
import Footer from './components/footer';

// Data
import { movies } from './components/storage/data';

// Sass / Css
import './App.sass';

class App extends Component {
    constructor (props) {
        super(props);
    
        this.films = movies;

        this.state = { };
    }
    
    render() {
        return (
            <div className="App">
                <Header films={this.films}/>
                <FilmsList films={this.films}/>
                <Footer />
            </div>
        );
    }
}

export default App;
