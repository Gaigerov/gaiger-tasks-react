import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome';

import App from './components/app';
import './index.scss';

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);
