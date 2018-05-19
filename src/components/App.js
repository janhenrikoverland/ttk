import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Position = styled.td``;

const User = styled.td`
    padding-left: 10px;
    width: 200px;
`;

const Points = styled.td`
    font-weight: 400;
`;

const Diff = styled.td`
    padding-left: 30px;
`;

class App extends Component {
    render() {
        const a = new Array(99).fill('');
        let index;

        return (
            <div className="App">
                <table>
                    <tbody>
                        {a.map((item, i) => {
                            index = i + 1;
                            return (
                                <tr key={index}>
                                    <Position>{`${
                                        ('' + index).length === 1 ? '0' : ''
                                    }${index}.`}</Position>
                                    <User>Jan Henrik Øverland</User>
                                    <Points>180</Points>
                                    <Diff>+100</Diff>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
