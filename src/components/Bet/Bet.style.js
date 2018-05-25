import styled from 'styled-components';

export const TableWrapper = styled.div`
    margin-top: 20px;
`;

export const TableHeader = styled.td`
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
`;

export const User = styled.span`
    padding-left: 11px;
`;

export const EmptyTd = styled.td`
    padding: 2px;
`;

export const Position = styled.td``;

export const getTeamWithColor = color => styled.td`
    padding-left: 10px;
    width: 200px;
    color: ${color};
`;

export const getPointsWithColor = color => styled.td`
    font-weight: 400;
    width: 40px;
    text-align: right;
    color: ${color};
`;
