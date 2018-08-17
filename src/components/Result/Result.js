import React from 'react';
import { SCTable, SCPosition, SCPoints, getSCUserName, SCDiff } from './Result.style';
import { numberPadZero, numberPadOperator } from '../../utils/number';

const Row = ({ position, userName, color, points, diff }) => {
    const SCUserName = getSCUserName(color);

    return (
        <tr>
            <SCPosition>{numberPadZero(position)}.</SCPosition>
            <SCUserName>{userName}</SCUserName>
            <SCPoints>{points}</SCPoints>
            <SCDiff>{diff !== 0 ? numberPadOperator(diff) : ''}</SCDiff>
        </tr>
    );
};

const Result = ({ results }) => (
    <SCTable className="SCBet">
        <table>
            <tbody>
                {results.map((result, i) => (
                    <Row
                        key={i}
                        position={i + 1}
                        userName={result.user.name}
                        color={result.legend.color}
                        points={result.legend.points}
                        diff={result.legend.diff}
                    />
                ))}
            </tbody>
        </table>
    </SCTable>
);

export default Result;
