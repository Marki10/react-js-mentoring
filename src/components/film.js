import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../styles/film.sass';

const Film = ({films, sortby}) => {

    films.sort(compareValues(sortby));
    if(films === undefined) films = [];

    const listItems = films.map((film) =>
        <div className="film" key={film.id}>
            <a href={'/film/'+film.id}>
                <img className="film-poster" src={film.poster_path != undefined ? "https://image.tmdb.org/t/p/w500/"+film.poster_path : "https://dummyimage.com/300x450/000/fff&text=No+image+:("} alt="" />
                <h3 className="film-title">{film.title}</h3>
            </a>
            <span className="release-year">{film.release_date}</span>
            <p className="category clear"></p>
        </div>
    );

    return (
        <section className="container film-container">
            {listItems} 
        </section>
    );
}

function compareValues(key, order = "desc") {
    return function(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
}
        
export default Film;
