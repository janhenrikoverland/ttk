import styled from 'styled-components';

export const SCTable = styled.div`
    margin-top: 20px;
`;

export const SCTableHeader = styled.td`
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-weight: 500;
    text-transform: uppercase;
    color: #333;
`;

export const SCUser = styled.span`
    padding-left: 11px;
`;

export const SCEmptyTd = styled.td`
    padding: 2px;
`;

export const SCPosition = styled.td``;

export const getSCTeam = color => styled.td`
    width: 200px;
    padding-left: 10px;
    font-weight: 400;
    color: ${color};
`;

export const getSCPoints = color => styled.td`
    width: 40px;
    text-align: right;
    font-weight: 500;
    color: ${color};
`;
