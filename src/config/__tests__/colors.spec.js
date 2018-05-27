import { USER_COLORS, TEAM_COLORS } from '../colors';
import { expectLength, expectString, expectObject } from '../../utils/tests';

describe('colors', () => {
    it('USER_COLORS to be an object', expectObject(USER_COLORS));

    Object.values(USER_COLORS).forEach(color => {
        it('user colors to be strings', expectString(color));
    });

    it('TEAM_COLORS to be an object', expectObject(TEAM_COLORS));

    Object.values(TEAM_COLORS).forEach(color => {
        it('team colors to be strings', expectString(color));
    });
});
