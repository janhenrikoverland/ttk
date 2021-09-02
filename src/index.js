import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/roboto/roboto-fontface.css';
import App from './components/App/App';
import config from './config/en2122';

ReactDOM.render(<App config={config} />, document.getElementById('root'));
