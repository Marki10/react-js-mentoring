import React from 'react';
import Search from './search';
import ResultContent from './resultcontent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container header">
            <div className="container header-wrapper">
                <h4 className="title">netflixroulette</h4>
                <Router>
                    <div>
                        <Route exact path="/" component={Search}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/film/:filmid" component={ResultContent}/>
                    </div>
                </Router>
            </div>
        </header>
    );
}

export default Header;
