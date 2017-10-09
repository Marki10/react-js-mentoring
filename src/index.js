import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';
import { Provider } from 'react-redux';
import storeApp from './components/storage/store';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";

const store = createStore((storeApp), applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
