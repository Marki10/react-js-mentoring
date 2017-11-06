import React, { Component } from 'react';
import Header from '../header';
import Search from '../search';
import ResultContent from '../resultcontent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const ReactTestRenderer = require('react-test-renderer');

describe('Header', () => {
    it('Render header', () => {
        const component = ReactTestRenderer.create(
            connect(<Header />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});
