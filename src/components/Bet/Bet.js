import React from 'react';
import { numberPadZero, numberPadOperator } from '../../utils/number';
import {
    SCTable,
    SCTableHeader,
    SCUser,
    SCEmptyTd,
    SCPosition,
    getSCTeam,
    getSCPoints,
} from './Bet.style';

const Row = ({ row, position }) => {
    const SCTeam = getSCTeam(row.legend.color);
    const SCPoints = getSCPoints(row.legend.color);

    return (
        <tr>
            <SCPosition>{`${numberPadZero(position)}.`}</SCPosition>
            <SCTeam>{row.team.name}</SCTeam>
            <SCPoints>{numberPadOperator(row.legend.points)}</SCPoints>
        </tr>
    );
};

export default ({ user, position, points, table }) => (
    <SCTable>
        <table>
            <tbody>
                <tr>
                    <SCTableHeader colSpan="3">
                        {`${numberPadZero(position)}.`}
                        <SCUser>{`${user.name} (${points})`}</SCUser>
                    </SCTableHeader>
                </tr>
                <tr>
                    <SCEmptyTd colSpan="3" />
                </tr>
                {table.map((row, i) => <Row key={i} row={row} position={i + 1} />)}
            </tbody>
        </table>
    </SCTable>
);
