import React from 'react';
import './Bet';
import Bet from './Bet';
import { getSortedResults, getResults } from '../../utils/ttk';

const BetList = ({ results }) =>
    results.map((result, i) => (
        <Bet
            key={i}
            user={result.user}
            position={i + 1}
            points={result.points}
            table={result.table}
        />
    ));

export default BetList;
