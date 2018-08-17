import { formatDate } from '../utils/date';
import teams from '../config/teams';

const idTeamMap = {
    'Arsenal FC': teams.ARS,
    'AFC Bournemouth': teams.BOU,
    'Brighton & Hove Albion': teams.BHA,
    'Burnley FC': teams.BRN,
    'Chelsea FC': teams.CHE,
    'Crystal Palace FC': teams.CRY,
    'Everton FC': teams.EVE,
    'Huddersfield Town': teams.HUD,
    'Leicester City FC': teams.LEI,
    'Liverpool FC': teams.LIV,
    'Manchester City FC': teams.MCI,
    'Manchester United FC': teams.MUN,
    'Newcastle United FC': teams.NEW,
    'Southampton FC': teams.SOU,
    'Stoke City FC': teams.STK,
    'Swansea City FC': teams.SWA,
    'Tottenham Hotspur FC': teams.TOT,
    'Watford FC': teams.WAT,
    'West Bromwich Albion FC': teams.WBA,
    'West Ham United FC': teams.WHU,
};

const getStanding = standing => standing.map(team => idTeamMap[team.teamName]);

export const getData = async api => {
    const { getCompetition, getLeagueTable } = api;
    const competition = await (await getCompetition()).json();
    const leagueTable = await (await getLeagueTable()).json();

    console.log('competition', competition);
    console.log('leagueTable', leagueTable);

    return {
        lastUpdated: formatDate(competition.lastUpdated),
        gameWeek: leagueTable.matchday,
        standing: getStanding(leagueTable.standing),
    };
};

export default {
    getData,
};
