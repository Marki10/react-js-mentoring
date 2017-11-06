import React, { Component } from 'react';
import Filter from '../filter';
import { connect } from "react-redux";

const ReactTestRenderer = require('react-test-renderer');

describe('Filter', () => {
    it('Render filter', () => {
        const component = ReactTestRenderer.create(
            connect(<Filter />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});