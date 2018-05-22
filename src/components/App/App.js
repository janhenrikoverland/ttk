import React, { Component } from 'react';
import styled from 'styled-components';
import { getData } from '../../adapters/football-data-org';
import UserTableList from '../UserTable/UserTableList';

const Loading = styled.div`
    width: 100vw;
    text-align: center;
    margin: 20px auto;
    color: #555;
`;

const HeaderBar = () => '';
const UserTable = () => '';

class App extends Component {
    state = null;

    async componentDidMount() {
        const { lastUpdated, gameweek, standing } = await getData();

        this.setState({
            lastUpdated,
            gameweek,
            standing,
        });
    }

    render() {
        if (!this.state) {
            return <Loading>Henter data fra api.football-data.org..</Loading>;
        }

        return (
            <div className="App">
                <HeaderBar lastUpdated={this.state.lastUpdated} gameweek={this.state.gameweek} />
                <UserTable />
                <UserTableList config={this.props.config} standing={this.state.standing} />
            </div>
        );
    }
}

export default App;
