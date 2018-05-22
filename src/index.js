import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/roboto-fontface.css';
import App from './components/App/App';
import config from './config/en1718';

ReactDOM.render(<App config={config} />, document.getElementById('root'));
