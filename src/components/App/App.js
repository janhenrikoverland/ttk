import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getData } from '../../adapters/football-data-org';
import HeaderBar from '../HeaderBar/HeaderBar';
import BetList from '../Bet/BetList';
import { AppStyled, ContentWrapper, Loading } from './App.style';

const Result = () => '';

const App = ({ config, lastUpdated, gameWeek, standing }) => {
    const { name, season } = config;

    return (
        <AppStyled>
            <HeaderBar
                {...{
                    name,
                    season,
                    lastUpdated,
                    gameWeek,
                }}
            />
            <ContentWrapper>
                <Result />
                <BetList
                    {...{
                        config,
                        standing,
                    }}
                />
            </ContentWrapper>
        </AppStyled>
    );
};

App.propTypes = {
    config: propTypes.object.isRequired,
    lastUpdated: propTypes.string.isRequired,
    gameWeek: propTypes.number.isRequired,
    standing: propTypes.arrayOf(propTypes.object).isRequired,
};

class AppCt extends Component {
    state = null;

    async componentDidMount() {
        const { lastUpdated, gameWeek, standing } = await getData();

        this.setState({
            lastUpdated,
            gameWeek,
            standing,
        });
    }

    render() {
        if (!this.state) {
            return <Loading>Henter data fra api.football-data.org..</Loading>;
        }

        const { config } = this.props;
        const { lastUpdated, gameWeek, standing } = this.state;

        return (
            <App
                {...{
                    config,
                    lastUpdated,
                    gameWeek,
                    standing,
                }}
            />
        );
    }
}

export default AppCt;
