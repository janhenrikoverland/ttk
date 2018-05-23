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
    padding-top: 1px;
`;

const Season = styled.div`
    flex: 1;
    font-size: 20px;
    color: #666;
    padding-top: 1px;
`;

const DateWrapper = styled.div`
    text-align: right;
    padding-top: 1px;
`;

const Date = styled.div`
    font-size: 9px;
    color: #111;
`;

const Shadow = styled.div`
    width: 100%;
    height: 7px;
    box-shadow: inset 0px 3px 6px -4px rgba(0, 0, 0, 0.3);
`;

export default ({ name, season, lastUpdated, gameweek }) => (
    <div>
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
        <Shadow />
    </div>
);
