import React, { Component } from 'react';
import FilmsList from '../filmslist';
import { connect } from "react-redux";

const ReactTestRenderer = require('react-test-renderer');

describe('Filmlist', () => {
    it('Render filmlist', () => {
        const component = ReactTestRenderer.create(
            connect(<FilmsList />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});