import React, { Component } from 'react';
import { getData } from '../../adapters/football-data-org';
import HeaderBar from '../HeaderBar/HeaderBar';
import UserTableList from '../UserTable/UserTableList';
import { AppStyled, ContentWrapper, Loading } from './App.styled';

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
            <AppStyled>
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
            </AppStyled>
        );
    }
}

export default App;
