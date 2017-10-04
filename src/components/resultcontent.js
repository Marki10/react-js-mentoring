import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../styles/resultcontent.sass';

const ResultContent = () => {
    const film = {  
        "unit":6226,
        "show_id":70299043,
        "show_title":"Attack on Titan",
        "release_year":"2013",
        "rating":"4.6",
        "category":"Anime",
        "show_cast":"Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka",
        "director":"",
        "summary":"For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.",
        "poster":"http://cdn-2.nflximg.com/en_us/boxshots/ghd/70299043.jpg",
        "mediatype":1
    };

    return (
        <section className="container resultcontent">
            <Link to="/search" className="search">Search</Link>
            <div className="left-side">
                <img className="film-poster" src={film.poster} alt="" />
            </div>
            <div className="right-side">
                <h3 className="film-title">{film.show_title} <span className="rating">4.1</span></h3>
                <h6 className="sub-title">{"Oscar"}</h6>
                <span className="release-year">{film.release_year}</span>
                <p className="summary">{film.summary}</p>
                <p className="director">Director: {film.director}</p>
                <p className="show-cast">Cast: {film.show_cast}</p>
            </div>
            <div className="clear"></div>
        </section>
    );
}
        
export default ResultContent;
