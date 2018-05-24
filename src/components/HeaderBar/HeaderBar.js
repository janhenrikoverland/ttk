import React from 'react';
import { HeaderWrapper, Header, Name, Season, DateWrapper, Date, Shadow } from './HeaderBar.styled';

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
