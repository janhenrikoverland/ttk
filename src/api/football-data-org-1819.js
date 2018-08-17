const headers = {
    'X-Auth-Token': '5ef9c7278ad8455ca8917237ef6fa859',
    Accept: 'application/json',
};

const dc = () => new Date().getTime();

const competitionUrl = 'http://api.football-data.org/v2/competitions/2021';

const leagueTableUrl = 'http://api.football-data.org/v2/competitions/2021/standings?matchday=38';

export const getCompetition = async () => fetch(`${competitionUrl}?dc=${dc()}`, { headers });

export const getLeagueTable = async () => fetch(`${leagueTableUrl}&dc=${dc()}`, { headers });

export default {
    getCompetition,
    getLeagueTable,
};
