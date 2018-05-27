import React, { Fragment } from 'react';
import {
    SCHeaderWrapper,
    SCHeader,
    SCName,
    SCSeason,
    SCDateWrapper,
    SCDate,
    SCShadow,
} from './HeaderBar.style';

export default ({ name, season, lastUpdated, gameWeek }) => (
    <Fragment>
        <SCHeaderWrapper className="SCHeaderBar">
            <SCHeader>
                <SCName>{name}</SCName>
                <SCSeason>{season}</SCSeason>
                <SCDateWrapper>
                    <SCDate>{lastUpdated}</SCDate>
                    <SCDate>Serierunde {gameWeek}</SCDate>
                </SCDateWrapper>
            </SCHeader>
        </SCHeaderWrapper>
        <SCShadow />
    </Fragment>
);
