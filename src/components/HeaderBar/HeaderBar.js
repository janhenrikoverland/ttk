import React, { Fragment } from 'react';
import {
    SCHeaderWrapper,
    SCHeader,
    SCLogo,
    SCName,
    SCSeason,
    SCGameWeek,
    SCShadow,
} from './HeaderBar.style';

export default ({ name, season, gameWeek }) => (
    <Fragment>
        <SCHeaderWrapper className="SCHeaderBar">
            <SCHeader>
                <SCLogo>
                    <SCName>{name}</SCName>
                    <SCSeason>{season}</SCSeason>
                </SCLogo>
                <SCGameWeek>Gameweek {gameWeek}</SCGameWeek>
            </SCHeader>
        </SCHeaderWrapper>
        <SCShadow />
    </Fragment>
);
