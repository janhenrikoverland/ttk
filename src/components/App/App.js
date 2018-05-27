import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getData } from '../../adapters/football-data-org';
import HeaderBar from '../HeaderBar/HeaderBar';
import BetList from '../Bet/BetList';
import { SCApp, SCContent, SCLoading } from './App.style';

const Result = () => '';

const App = ({ config, lastUpdated, gameWeek, standing }) => {
    const { name, season } = config;

    return (
        <SCApp className="SCApp">
            <HeaderBar
                {...{
                    name,
                    season,
                    lastUpdated,
                    gameWeek,
                }}
            />
            <SCContent className="SCContent">
                <Result className="SCResult" />
                <BetList
                    {...{
                        config,
                        standing,
                    }}
                />
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
        const { lastUpdated, gameWeek, standing } = await getData();

        this.setState({
            lastUpdated,
            gameWeek,
            standing,
        });
    }

    render() {
        if (!this.state) {
            return <SCLoading>Henter data fra api.football-data.org..</SCLoading>;
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
