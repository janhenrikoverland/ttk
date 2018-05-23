import React, { Component } from 'react';
import styled from 'styled-components';
import { getData } from '../../adapters/football-data-org';
import HeaderBar from '../HeaderBar/HeaderBar';
import UserTableList from '../UserTable/UserTableList';

const AppStyle = styled.div`
    font-family: Helvetica Neue, Hevetica, Roboto, sans-serif;
    font-weight: 300;
    font-size: 19px;
`;

const ContentWrapper = styled.div`
    padding: 0 20px 20px;
    letter-spacing: -0.5px;
`;

const Loading = styled.div`
    width: 100vw;
    text-align: center;
    margin: 20px auto;
    color: #555;
`;

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

        const { config } = this.props;
        const { name, season } = config;
        const { lastUpdated, gameweek, standing } = this.state;

        return (
            <AppStyle>
                <HeaderBar
                    name={name}
                    season={season}
                    lastUpdated={lastUpdated}
                    gameweek={gameweek}
                />
                <ContentWrapper>
                    <UserTable />
                    <UserTableList config={config} standing={standing} />
                </ContentWrapper>
            </AppStyle>
        );
    }
}

export default App;
