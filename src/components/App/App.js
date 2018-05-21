import React, { Component } from 'react';
import styled from 'styled-components';
import { getLeagueTable, getCompetition } from '../../api';
import config from '../../config/en1718';

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

const Loading = styled.div`
    width: 100vw;
    text-align: center;
    margin: 20px auto;
    color: #555;
`;

class App extends Component {
    state = {
        config: null,
    };

    async componentDidMount() {
        const competition = await (await getCompetition()).json();
        const leagueTable = await (await getLeagueTable()).json();

        console.log(competition);
        console.log(leagueTable);

        this.setState({
            config: true,
        });
    }

    render() {
        const a = new Array(99).fill('');
        let index;

        if (!this.state.config) {
            return <Loading>Henter data fra api.football-data.org..</Loading>;
        }

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
