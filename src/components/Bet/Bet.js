import React from 'react';
import { numberPadZero, numberPadOperator } from '../../utils/number';
import {
    TableWrapper,
    TableHeader,
    User,
    EmptyTd,
    getTeamWithColor,
    getPointsWithColor,
    Position,
} from './Bet.style';

const Row = ({ row, position }) => {
    const Team = getTeamWithColor(row.legend.color);
    const Points = getPointsWithColor(row.legend.color);

    return (
        <tr>
            <Position>{`${numberPadZero(position)}.`}</Position>
            <Team>{row.team.name}</Team>
            <Points>{numberPadOperator(row.legend.points)}</Points>
        </tr>
    );
};

export default ({ user, position, points, table }) => (
    <TableWrapper>
        <table>
            <tbody>
                <tr>
                    <TableHeader colSpan="3">
                        {`${numberPadZero(position)}.`}
                        <User>{`${user.name} (${points})`}</User>
                    </TableHeader>
                </tr>
                <tr>
                    <EmptyTd colSpan="3" />
                </tr>
                {table.map((row, i) => <Row key={i} row={row} position={i + 1} />)}
            </tbody>
        </table>
    </TableWrapper>
);
