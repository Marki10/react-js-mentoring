import React, { Component } from 'react';
import NotFound from '../notfound';
const ReactTestRenderer = require('react-test-renderer');

describe('Not found', () => {
    it('Render not found page', () => {
        const component = ReactTestRenderer.create(
            <NotFound />
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});