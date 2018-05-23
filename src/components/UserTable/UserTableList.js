import React from 'react';
import './UserTable';
import UserTable from './UserTable';
import { numberDifference } from '../../utils/number';

const getStandingById = standing =>
    standing.reduce(
        (map, team, index) => ({
            ...map,
            [team.id]: { ...team, position: index + 1 },
        }),
        {}
    );

const getTableWithPosition = table =>
    table.map((team, index) => ({ ...team, position: index + 1 }));

const getResults = (config, standing) => {
    const bets = config.bets;
    const legend = config.team.legend;

    const standingById = getStandingById(standing);

    return bets.map(bet => {
        const table = getTableWithPosition(bet.table).map(team => {
            const diff = numberDifference(team.position, standingById[team.id].position);

            return {
                team,
                legend: legend[diff],
            };
        });

        const totalPoints = table.reduce((total, row) => (total += row.legend.points), 0);

        return {
            user: bet.user,
            points: totalPoints,
            table,
        };
    });
};

const getMutualWinner = (user1TableDesc, user2TableDesc) => {
    for (let i = 0, user1Points, user2Points; i < user1TableDesc.length; i++) {
        user1Points = user1TableDesc[i].legend.points;
        user2Points = user2TableDesc[i].legend.points;

        if (user1Points < user2Points) {
            return -1;
        } else if (user2Points < user1Points) {
            return 1;
        }
    }

    return 0;
};

const getSortedResults = results => {
    const sortFn = (result1, result2) => {
        const diff = result1.points - result2.points;

        if (diff !== 0) {
            return diff;
        }

        const result1TableDesc = result1.table
            .slice(0)
            .sort((row1, row2) => row2.legend.points - row1.legend.points);

        const result2TableDesc = result2.table
            .slice(0)
            .sort((row1, row2) => row2.legend.points - row1.legend.points);

        const mutualWinner = getMutualWinner(result1TableDesc, result2TableDesc);

        if (mutualWinner === 0) {
            console.warning(`Helt likt mellom ${result1.user.name} og ${result2.user.name}`);
        }

        return mutualWinner;
    };

    return results.sort(sortFn);
};

const UserTableList = ({ config, standing }) => {
    const results = getSortedResults(getResults(config, standing));

    return results.map((result, i) => (
        <UserTable
            key={i}
            user={result.user}
            position={i + 1}
            points={result.points}
            table={result.table}
        />
    ));
};

export default UserTableList;
