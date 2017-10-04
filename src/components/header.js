import React from 'react';
import Search from './search';
import ResultContent from './resultcontent';

const Header = ({films}) => {
    return (
        <header className="container header">
            <div className="container header-wrapper">
                <h4 className="title">netflixroulette</h4>
                <ResultContent />
                {/*<Search />*/}
            </div>
        </header>
    );
}

export default Header;
