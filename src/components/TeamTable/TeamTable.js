import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.tr`
    border-bottom: 1px solid #ddd;
`;

const Position = styled.td``;

const Team = styled.td`
    padding-left: 10px;
    width: 200px;
`;

const Points = styled.td`
    font-weight: 400;
`;

const Row = ({ row }) => (
    <tr>
        <Position>{row.position + '.'}</Position>
        <Team>{row.team}</Team>
        <Points>{row.points}</Points>
    </tr>
);

const TeamTable = ({ rows }) => (
    <table>
        <tbody>
            <{rows.map((row, i) => <Row key={i} row={row} />)}</tbody>
    </table>
);

export default ({ rows, teamColorMap }) => {
    const rows = [
        { position: '01', team: 'Manchester City', points: -1 },
        { position: '02', team: 'Liverpool', points: 1 },
        { position: '03', team: 'Burnley', points: 22 },
    ];

    return <TeamTable rows={rows} />;
};
