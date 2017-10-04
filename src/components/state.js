import React from 'react';
import '../styles/state.sass';

const State = () => {
    return (
        <section className="container state">
                <div className="left-side">{"7"} movies found</div>
                <div className="right-side">
                    <div className="item">Sort by</div>
                    <div className="item">release date</div>
                    <div className="item">rating</div>
                </div>
        </section>
    );
}
        
export default State;
