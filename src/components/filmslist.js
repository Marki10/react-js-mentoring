import React from 'react';
import Filter from './filter';
import Film from './film';
import NotFound from './notfound';
import '../styles/filmslist.sass';

const FilmsList = ({films, sortby}) => {

    if(films === undefined) return <NotFound/>;

    return (
        <section className="container filmslist">
            <Filter lenght={films.length}/>
            <Film films={films} sortby={sortby}/>
        </section>
    );
}
        
export default FilmsList;
