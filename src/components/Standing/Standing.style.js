import styled from 'styled-components';

export const SCStandingWrapper = styled.div`
    margin-top: 30px;
    padding-bottom: 10px;
`;

export const SCLink = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #1a67ff;
    letter-spacing: -0.3px;
    cursor: pointer;
`;

export const SCLinkArrow = styled.span`
    margin-left: 3px;
    padding-right: 7px;
    font-weight: 300;
    color: #000;
`;

export const SCTableHeader = styled.td`
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    font-weight: 500;
    text-transform: uppercase;
    color: #333;
`;

export const SCEmptyTd = styled.td`
    padding: 2px;
`;

export const getSCTeamName = color => styled.td`
    width: 200px;
    padding-left: 10px;
    font-weight: 400;
    color: ${color};
`;

export const getSCPoints = color => styled.td`
    width: 40px;
    font-weight: 500;
    text-align: right;
    color: ${color};
`;
