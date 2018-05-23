import React from 'react';
import styled from 'styled-components';
import { numberPadZero, numberPadOperator } from '../../utils/number';

const TableWrapper = styled.div`
    margin-top: 20px;
`;

const TableHeader = styled.td`
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
`;

const User = styled.span`
    padding-left: 13px;
`;

const EmptyTd = styled.td`
    padding: 2px;
`;

const Position = styled.td``;

const getTeamWithColor = color => styled.td`
    padding-left: 10px;
    width: 200px;
    color: ${color};
`;

const getPointsWithColor = color => styled.td`
    font-weight: 400;
    width: 40px;
    text-align: right;
    color: ${color};
`;

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
