import React, { Component } from 'react';
import { connect } from "react-redux";
import App from '../../App';
import Header from '../header';
import FilmsList from '../filmslist';
import Footer from '../footer';
import { setSortBy, getMovies } from '../storage/actions';
const ReactTestRenderer = require('react-test-renderer');

describe('App', () => {
    it('Render app', () => {
        const component = ReactTestRenderer.create(
            connect(<App />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});