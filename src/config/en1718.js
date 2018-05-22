import arrayDifference from 'd2-utilizr/lib/arrayDifference';

import { PAM, ABO, FEI, OEL, LPA, JHA, FHE, KLA, EMA, LWA, KWI, JOV } from './users';
import {
    ARS,
    BOU,
    BHA,
    BRN,
    CHE,
    CRY,
    EVE,
    HUD,
    LEI,
    LIV,
    MCI,
    MUN,
    NEW,
    SOU,
    STK,
    SWA,
    TOT,
    WAT,
    WBA,
    WHU,
} from './teams';
import { TEAM_COLORS, USER_COLORS } from './colors';

// Name
const name = 'TTKE';

// Season
const season = '1718';

// Users
const users = [PAM, ABO, FEI, OEL, LPA, JHA, FHE, KLA, EMA, LWA, KWI, JOV];

// User colors
const userColors = {
    1: USER_COLORS.WINNER_FIRST,
    2: USER_COLORS.WINNER_SECOND,
    3: USER_COLORS.WINNER_THIRD,
    4: USER_COLORS.LOSER_FIRST,
    5: USER_COLORS.LOSER_ALT6,
    6: USER_COLORS.LOSER_ALT8,
    7: USER_COLORS.LOSER_ALT10,
    8: USER_COLORS.LOSER_ALT12,
    9: USER_COLORS.LOSER_ALT14,
    10: USER_COLORS.LOSER_ALT16,
    11: USER_COLORS.LOSER_ALT18,
    12: USER_COLORS.LOSER_LAST,
};

// Teams
const teams = [
    ARS,
    BOU,
    BHA,
    BRN,
    CHE,
    CRY,
    EVE,
    HUD,
    LEI,
    LIV,
    MCI,
    MUN,
    NEW,
    SOU,
    STK,
    SWA,
    TOT,
    WAT,
    WBA,
    WHU,
];

// Team legend
const teamLegend = {
    0: { points: -1, color: TEAM_COLORS.CORRECT },
    1: { points: 1, color: TEAM_COLORS.GOOD },
    2: { points: 2, color: TEAM_COLORS.GOOD },
    3: { points: 3, color: TEAM_COLORS.GOOD },
    4: { points: 5, color: TEAM_COLORS.MEDIUM },
    5: { points: 7, color: TEAM_COLORS.MEDIUM },
    6: { points: 9, color: TEAM_COLORS.MEDIUM },
    7: { points: 12, color: TEAM_COLORS.BAD },
    8: { points: 15, color: TEAM_COLORS.BAD },
    9: { points: 18, color: TEAM_COLORS.BAD },
    10: { points: 22, color: TEAM_COLORS.HORRIBLE },
    11: { points: 26, color: TEAM_COLORS.HORRIBLE },
    12: { points: 30, color: TEAM_COLORS.HORRIBLE },
    13: { points: 35, color: TEAM_COLORS.HORRIBLE },
    14: { points: 40, color: TEAM_COLORS.HORRIBLE },
    15: { points: 45, color: TEAM_COLORS.HORRIBLE },
    16: { points: 51, color: TEAM_COLORS.HORRIBLE },
    17: { points: 57, color: TEAM_COLORS.HORRIBLE },
    18: { points: 63, color: TEAM_COLORS.HORRIBLE },
    19: { points: 70, color: TEAM_COLORS.HORRIBLE },
};

// Bets
const bets = [
    {
        user: PAM,
        table: [
            MCI,
            MUN,
            CHE,
            LIV,
            TOT,
            ARS,
            EVE,
            SOU,
            LEI,
            WHU,
            NEW,
            WBA,
            STK,
            CRY,
            BOU,
            BRN,
            HUD,
            WAT,
            SWA,
            BHA,
        ],
    },
    {
        user: ABO,
        table: [
            MCI,
            LIV,
            MUN,
            CHE,
            TOT,
            ARS,
            EVE,
            WHU,
            SOU,
            LEI,
            CRY,
            STK,
            NEW,
            BOU,
            WBA,
            WAT,
            HUD,
            BRN,
            SWA,
            BHA,
        ],
    },
    {
        user: FEI,
        table: [
            MUN,
            MCI,
            CHE,
            TOT,
            ARS,
            LIV,
            EVE,
            SOU,
            CRY,
            WHU,
            LEI,
            STK,
            WBA,
            NEW,
            BOU,
            BRN,
            WAT,
            BHA,
            HUD,
            SWA,
        ],
    },
    {
        user: OEL,
        table: [
            MCI,
            MUN,
            LIV,
            TOT,
            CHE,
            ARS,
            EVE,
            BOU,
            WHU,
            SOU,
            LEI,
            CRY,
            WBA,
            STK,
            NEW,
            BRN,
            BHA,
            WAT,
            SWA,
            HUD,
        ],
    },
    {
        user: LPA,
        table: [
            MCI,
            MUN,
            CHE,
            TOT,
            LIV,
            ARS,
            EVE,
            WHU,
            SOU,
            LEI,
            STK,
            CRY,
            WBA,
            NEW,
            BOU,
            WAT,
            BRN,
            SWA,
            BHA,
            HUD,
        ],
    },
    {
        user: JHA,
        table: [
            TOT,
            MCI,
            CHE,
            LIV,
            MUN,
            ARS,
            EVE,
            LEI,
            SOU,
            WHU,
            BOU,
            WBA,
            CRY,
            STK,
            NEW,
            SWA,
            BHA,
            BRN,
            WAT,
            HUD,
        ],
    },
    {
        user: FHE,
        table: [
            MCI,
            TOT,
            MUN,
            LIV,
            CHE,
            ARS,
            SOU,
            EVE,
            WHU,
            CRY,
            WBA,
            STK,
            BOU,
            BRN,
            LEI,
            WAT,
            SWA,
            HUD,
            BHA,
            NEW,
        ],
    },
    {
        user: KLA,
        table: [
            MCI,
            CHE,
            MUN,
            LIV,
            ARS,
            TOT,
            EVE,
            LEI,
            SOU,
            WHU,
            BOU,
            WBA,
            BHA,
            CRY,
            WAT,
            NEW,
            STK,
            SWA,
            HUD,
            BRN,
        ],
    },
    {
        user: EMA,
        table: [
            MCI,
            MUN,
            TOT,
            CHE,
            LIV,
            ARS,
            EVE,
            WHU,
            SOU,
            LEI,
            BOU,
            WBA,
            NEW,
            STK,
            CRY,
            BRN,
            BHA,
            WAT,
            SWA,
            HUD,
        ],
    },
    {
        user: LWA,
        table: [
            MCI,
            CHE,
            MUN,
            ARS,
            TOT,
            LIV,
            EVE,
            SOU,
            BOU,
            WHU,
            WBA,
            STK,
            LEI,
            NEW,
            CRY,
            BRN,
            WAT,
            SWA,
            BHA,
            HUD,
        ],
    },
    {
        user: KWI,
        table: [
            MCI,
            CHE,
            MUN,
            ARS,
            TOT,
            LIV,
            EVE,
            WHU,
            SOU,
            LEI,
            STK,
            NEW,
            BOU,
            WBA,
            WAT,
            BRN,
            SWA,
            CRY,
            BHA,
            HUD,
        ],
    },
    {
        user: JOV,
        table: [
            MCI,
            CHE,
            TOT,
            ARS,
            LIV,
            MUN,
            EVE,
            LEI,
            BOU,
            SOU,
            WHU,
            CRY,
            WBA,
            STK,
            NEW,
            SWA,
            BRN,
            WAT,
            BHA,
            HUD,
        ],
    },
];

export default {
    name: name,
    season: season,
    user: {
        users: users,
        colors: userColors,
    },
    team: {
        teams: teams,
        legend: teamLegend,
    },
    bets: bets,
};

// Tests

// Name
if (!(name && typeof name === 'string')) {
    console.error('Name:', name);
}

// Season
if (!(season && typeof season === 'string')) {
    console.error('Season:', season);
}

// Users
if (!(Array.isArray(users) && users.length)) {
    console.error('Users:', users);
}

// User colors
if (!(userColors && Object.values(userColors).length === users.length)) {
    console.error('User colors:', userColors, users);
}

// Teams
if (!(Array.isArray(teams) && teams.length)) {
    console.error('Teams:', teams);
}

// Team legend
if (!(teamLegend && Object.values(teamLegend).length === teams.length)) {
    console.error('Team legend:', teamLegend, teams);
}

// Bets
if (!(Array.isArray(bets) && bets.length)) {
    console.error('Bets:', bets);
}

const betUserDiff = arrayDifference(bets.map(bet => bet.user), users);
const userBetDiff = arrayDifference(users, bets.map(bet => bet.user));

if (betUserDiff.length) {
    console.error('Bets with undefined user:', betUserDiff);
}

if (userBetDiff.length) {
    console.error('Users without bets:', userBetDiff);
}

bets.forEach(bet => {
    const diff = arrayDifference(bet.table, teams, true);

    if (diff.length) {
        console.error('Invalid table:', bet.user.name, diff, teams);
    }
});
