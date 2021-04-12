import { formatDate } from '../utils/date';
import teams from '../config/teams';

const idTeamMap = {
    'Arsenal FC': teams.ARS,
    'Aston Villa FC': teams.AVL,
    'Brighton & Hove Albion FC': teams.BHA,
    'Burnley FC': teams.BRN,
    'Chelsea FC': teams.CHE,
    'Crystal Palace FC': teams.CRY,
    'Everton FC': teams.EVE,
    'Fulham FC': teams.FUL,
    'Leeds United FC': teams.LEE,
    'Leicester City FC': teams.LEI,
    'Liverpool FC': teams.LIV,
    'Manchester City FC': teams.MCI,
    'Manchester United FC': teams.MUN,
    'Newcastle United FC': teams.NEW,
    'Sheffield United FC': teams.SHU,
    'Southampton FC': teams.SOU,
    'Tottenham Hotspur FC': teams.TOT,
    'West Bromwich Albion FC': teams.WBA,
    'West Ham United FC': teams.WHU,
    'Wolverhampton Wanderers FC': teams.WOL,
};

const getStanding = standing => standing.map(team => idTeamMap[team.team.name]);

export const getData = async api => {
    const { getCompetition, getLeagueTable } = api;
    const competition = await (await getCompetition()).json();
    const leagueTable = await (await getLeagueTable()).json();

    console.log('competition', competition);
    console.log('leagueTable', leagueTable);

    const data = {
        lastUpdated: formatDate(competition.lastUpdated),
        gameWeek: competition.currentSeason.currentMatchday,
        standing: getStanding(leagueTable.standings[0].table),
    };

    console.log('adapted data', data);

    return data;
};

export default {
    getData,
};
