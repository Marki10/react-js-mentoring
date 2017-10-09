import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

// Actions
import { getMovies } from './storage/actions';

import '../styles/resultcontent.sass';

class ResultContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: false,
            movie: {},
            similar: {}
        };

    }
    
    getMovie() {
        const movies = axios.get("https://api.themoviedb.org/3/movie/"+this.props.match.params.filmid+"?api_key=37a2d4fc32fa08c8e18ab024745d3a7e");
        return movies;
    }
    
    getSimilarMovies() {
        const similar = axios.get("https://api.themoviedb.org/3/movie/"+this.props.match.params.filmid+"/similar?api_key=37a2d4fc32fa08c8e18ab024745d3a7e");
        return similar;
    }
    
    componentWillMount() {
        this.setState({ loading: true });
        this.getMovie().then(data => { 
            this.setState({
                movie: data.data,
            });

            this.getSimilarMovies().then(data => { 
                this.setState({
                    similar: data.data.results,
                    loading: false
                });
                console.log(this.state.similar);
            });
        });
    }  
    
    render() {
        if (this.state.loading) return <h2>Loading...</h2>;
        
        return (
            <section className="container resultcontent">
                <a href="/search" className="search">Search</a>
                <div className="left-side">
                    <img className="film-poster" src={this.state.movie.backdrop_path !== undefined ? "https://image.tmdb.org/t/p/w500/"+this.state.movie.backdrop_path : "https://dummyimage.com/300x450/000/fff&text=No+image+:("} alt={this.state.movie.title} />
                </div>
                <div className="right-side">
                    <h3 className="film-title">{this.state.movie.title} <span className="rating">{this.state.movie.vote_average}</span></h3>
                    <h6 className="sub-title">{this.state.movie.tagline}</h6>
                    <span className="release-year">{this.state.movie.release_year}</span>
                    <p className="summary">{this.state.movie.overview}</p>
                    <p className="director">Companies: {this.state.movie.production_companies.map(i => i.name+', ')}</p>
                    <p className="show-cast">Genres: {this.state.movie.genres.map(i => i.name+', ')}</p>
                </div>
                <div className="clear"></div>
            </section>
        )
    };
}

export default connect()(ResultContent);
