import styled from 'styled-components';

export const SCTable = styled.div`
    margin-top: 20px;
`;

export const SCTableHeader = styled.td`
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
`;

export const SCUser = styled.span`
    padding-left: 11px;
`;

export const SCEmptyTd = styled.td`
    padding: 2px;
`;

export const SCPosition = styled.td``;

export const getSCTeam = color => styled.td`
    padding-left: 10px;
    width: 200px;
    color: ${color};
`;

export const getSCPoints = color => styled.td`
    font-weight: 400;
    width: 40px;
    text-align: right;
    color: ${color};
`;
