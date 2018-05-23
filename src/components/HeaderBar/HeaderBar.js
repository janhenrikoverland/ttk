import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    padding: 0 12px;
    background-color: #fbfbfb;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 400;
`;

const Season = styled.div`
    font-size: 20px;
    color: #555;
    flex: 1;
`;

const DateWrapper = styled.div`
    text-align: right;
`;

const Date = styled.div`
    font-size: 9px;
    color: #111;
`;

export default ({ name, season, lastUpdated, gameweek }) => (
    <HeaderWrapper>
        <Header>
            <Name>{name}</Name>
            <Season>{season}</Season>
            <DateWrapper>
                <Date>{lastUpdated}</Date>
                <Date>Serierunde {gameweek}</Date>
            </DateWrapper>
        </Header>
    </HeaderWrapper>
);
