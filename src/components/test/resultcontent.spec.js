import React, { Component } from 'react';
import ResultContent from '../resultcontent';
import { connect } from "react-redux";
const ReactTestRenderer = require('react-test-renderer');

describe('ResultContent', () => {
    it('Render resultcontent', () => {
        const component = ReactTestRenderer.create(
            connect(<ResultContent />)
        );
        const testTemp = component.toJSON();
        expect(testTemp).toMatchSnapshot();
    })
});