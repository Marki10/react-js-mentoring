import React, { Component } from 'react';
import Search from '../search';
import { connect } from "react-redux";
const ReactTestRenderer = require('react-test-renderer');

describe('Search', () => {
    it('Render search', () => {
        const component = ReactTestRenderer.create(
            connect(<Search />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});