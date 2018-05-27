import React, { Fragment } from 'react';
import {
    SCHeaderWrapper,
    SCHeader,
    SCLogo,
    SCName,
    SCSeason,
    SCGameWeek,
    SCLastUpdated,
    SCShadow,
} from './HeaderBar.style';

export default ({ name, season, lastUpdated, gameWeek }) => (
    <Fragment>
        <SCHeaderWrapper className="SCHeaderBar">
            <SCHeader>
                <SCLogo>
                    <SCName>{name}</SCName>
                    <SCSeason>{season}</SCSeason>
                </SCLogo>
                <SCGameWeek>Serierunde {gameWeek}</SCGameWeek>
                <SCLastUpdated>{lastUpdated}</SCLastUpdated>
            </SCHeader>
        </SCHeaderWrapper>
        <SCShadow />
    </Fragment>
);
