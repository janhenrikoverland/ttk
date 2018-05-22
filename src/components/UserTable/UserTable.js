import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.td`
    border-bottom: 1px solid #ddd;
    font-weight: 400;
`;

const User = styled.span`
    padding: 0 5px;
`;

const Position = styled.td``;

const Team = styled.td`
    padding-left: 10px;
    width: 200px;
`;

const Points = styled.td`
    font-weight: 400;
    width: 40px;
    text-align: right;
`;

const Row = ({ row, index }) => (
    <tr>
        <Position>{`${index}.`}</Position>
        <Team>{row.team.name}</Team>
        <Points>{row.points}</Points>
    </tr>
);

export default ({ user, position, points, table }) => (
    <table>
        <tbody>
            <tr>
                <TableHeader colSpan="3">
                    {`${position}.`}
                    <User>{`${user.name} (${points})`}</User>
                </TableHeader>
            </tr>
            {table.map((row, i) => <Row key={i} row={row} index={i + 1} />)}
        </tbody>
    </table>
);
