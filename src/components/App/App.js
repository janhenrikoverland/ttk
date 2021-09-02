import React, { Component } from 'react';
import propTypes from 'prop-types';
import HeaderBar from '../HeaderBar/HeaderBar';
import Standing from '../Standing/Standing';
import Result from '../Result/Result';
import BetList from '../Bet/BetList';
import { SCApp, SCContent, SCLoading } from './App.style';
import { getSortedResults, getResults } from '../../utils/ttk';

const App = ({ config, lastUpdated, gameWeek, standing, results }) => {
    const { name, season } = config;

    return (
        <SCApp className="SCApp">
            <HeaderBar
                {...{
                    name,
                    season,
                    gameWeek,
                }}
            />
            <SCContent className="SCContent">
                <Result className="SCResult" results={results} />
                <Standing className="SCStanding" standing={standing} gameWeek={gameWeek} />
                <BetList standing={standing} results={results} />
            </SCContent>
        </SCApp>
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
        const { config } = this.props;
        const { api, adapter } = config;
        const { getData } = adapter;

        const { lastUpdated, gameWeek, standing } = await getData(api);
        console.log(lastUpdated, gameWeek, standing);
        const results = getSortedResults(getResults(config, standing), config.user.colors);

        this.setState({
            lastUpdated,
            gameWeek,
            standing,
            results,
        });
    }

    render() {
        if (!this.state) {
            return <SCLoading>Henter data fra api.football-data.org..</SCLoading>;
        }

        const { config } = this.props;
        const { lastUpdated, gameWeek, standing, results } = this.state;

        return (
            <App
                {...{
                    config,
                    lastUpdated,
                    gameWeek,
                    standing,
                    results,
                }}
            />
        );
    }
}

export default AppCt;
