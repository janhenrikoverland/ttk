import styled from 'styled-components';

export const SCTable = styled.div`
    margin-top: 15px;
`;

export const SCPosition = styled.td``;

export const getSCUserName = color => styled.td`
    width: 200px;
    padding-left: 10px;
    font-weight: 400;
    color: ${color};
`;

export const SCPoints = styled.td`
    width: 40px;
    font-weight: 500;
    text-align: right;
`;

export const SCDiff = styled.td`
    padding-left: 20px;
`;
