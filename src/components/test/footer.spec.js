import React, { Component } from 'react';
import Footer from '../footer';
const ReactTestRenderer = require('react-test-renderer');

describe('Footer', () => {
    it('Render footer', () => {
        const component = ReactTestRenderer.create(
            <Footer />
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});