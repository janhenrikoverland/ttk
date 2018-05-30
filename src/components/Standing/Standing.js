import React from 'react';
import {
    SCStandingWrapper,
    SCLink,
    getSCTeamName,
    getSCPoints,
    SCTableHeader,
    SCEmptyTd,
    SCLinkArrow,
} from './Standing.style';
import { numberPadZero } from '../../utils/number';
import { TEAM_COLORS } from '../../config/colors';

const Row = ({ position, teamName, color }) => {
    const SCTeamName = getSCTeamName(color);
    const SCPoints = getSCPoints(color);

    return (
        <tr>
            <td>{numberPadZero(position)}.</td>
            <SCTeamName>{teamName}</SCTeamName>
            <SCPoints>-1</SCPoints>
        </tr>
    );
};

class Standing extends React.Component {
    state = {
        expanded: false,
    };

    onClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    renderLink = () => (
        <SCLink onClick={this.onClick}>
            <SCLinkArrow>></SCLinkArrow>
            {this.state.expanded ? 'SKJUL' : 'VIS'} TABELL FOR SERIERUNDE {this.props.gameWeek}
        </SCLink>
    );

    renderStanding = () => (
        <table>
            <tbody>
                <tr>
                    <SCTableHeader colSpan="3">SERIERUNDE {this.props.gameWeek}</SCTableHeader>
                </tr>
                <tr>
                    <SCEmptyTd colSpan="3" />
                </tr>
                {this.props.standing.map((team, i) => (
                    <Row
                        key={i}
                        position={i + 1}
                        teamName={team.name}
                        color={TEAM_COLORS.CORRECT}
                    />
                ))}
            </tbody>
        </table>
    );

    render() {
        return (
            <SCStandingWrapper>
                {this.renderLink()}
                {this.state.expanded ? this.renderStanding() : null}
            </SCStandingWrapper>
        );
    }
}

export default Standing;
