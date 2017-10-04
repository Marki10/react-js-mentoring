import React from 'react';
import State from './state';
import Film from './film';
import '../styles/filmslist.sass';

const FilmsList = ({films}) => {
    return (
        <section className="container filmslist">
            <State />
            <Film films={films}/>
        </section>
    );
}
        
export default FilmsList;
