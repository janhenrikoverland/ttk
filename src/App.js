import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        const a = new Array(200).fill('');

        return <div className="App">{a.map((item, i) => <div key={i}>row {i}</div>)}</div>;
    }
}

export default App;
