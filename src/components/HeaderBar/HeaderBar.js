import React from 'react';
import { HeaderWrapper, Header, Name, Season, DateWrapper, Date, Shadow } from './HeaderBar.style';

export default ({ name, season, lastUpdated, gameWeek }) => (
    <div>
        <HeaderWrapper>
            <Header>
                <Name>{name}</Name>
                <Season>{season}</Season>
                <DateWrapper>
                    <Date>{lastUpdated}</Date>
                    <Date>Serierunde {gameWeek}</Date>
                </DateWrapper>
            </Header>
        </HeaderWrapper>
        <Shadow />
    </div>
);
