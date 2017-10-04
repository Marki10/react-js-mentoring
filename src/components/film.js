import React from 'react';
import '../styles/film.sass';

const Film = ({films}) => {

    const listItems = films.map((film) =>
        <div className="film">
            <a href={"/film/"+film.show_title}>
                <img className="film-poster" src={film.poster} alt="" />
                <h3 className="film-title">{film.show_title}</h3>
            </a>
            <span className="release-year">{film.release_year}</span>
            <p className="category clear">{film.category}</p>
        </div>
    );

    return (
        <section className="container film-container">
            {listItems} 
        </section>
    );
}
        
export default Film;
