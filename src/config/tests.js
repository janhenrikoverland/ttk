import arrayDifference from 'd2-utilizr/lib/arrayDifference';

export const expectString = str => () => expect(typeof str).toEqual('string');

export const expectLength = param => () => expect(!!param.length).toEqual(true);
export const expectNoLength = param => () => expect(!!param.length).toEqual(false);

export const expectArray = array => () => {
    expect(Array.isArray(array)).toEqual(true);
    expect(!!array).toEqual(true);
};

export const expectObject = obj => () => {
    expect(typeof obj).toEqual('object');
    expect(Array.isArray(obj)).toEqual(false);
};

export const getConfigTest = config => () => {
    const { name, season, user, team, bets } = config;

    it('name to be a string', expectString(name));

    it('season to be a string', expectString(season));

    it('user to be an object', expectObject(user));

    it('user.users to be an array', expectArray(user.users));
    it('user.users to have length', expectLength(user.users));

    it('user.colors to be an object', expectObject(user.colors));
    it('user.colors values to have length', expectLength(Object.values(user.colors)));

    it('team to be an object', expectObject(team));

    it('team.teams to be an array', expectArray(team.teams));
    it('team.teams to have length', expectLength(team.teams));

    it('team.legend to be an object', expectObject(team.legend));
    it('team.legend values to have length', expectLength(Object.values(team.legend)));

    it('bets to be an array', expectArray(bets));

    const betUserDiff = arrayDifference(bets.map(bet => bet.user), user.users);
    const userBetDiff = arrayDifference(user.users, bets.map(bet => bet.user));

    it('no bets with undefined users', expectNoLength(betUserDiff));
    it('no users withouth bets', expectNoLength(userBetDiff));

    let betTeamDiff;
    let teamBetDiff;

    bets.forEach(bet => {
        betTeamDiff = arrayDifference(bet.table, team.teams);
        teamBetDiff = arrayDifference(team.teams, bet.table);

        it('no bets with undefined teams', expectNoLength(betTeamDiff));
        it('no teams without bets', expectNoLength(betTeamDiff));
    });
};
