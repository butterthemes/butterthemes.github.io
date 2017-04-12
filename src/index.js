import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const root = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    root
);

render(App);

if (module.hot) module.hot.accept('./app', () => render(App));
