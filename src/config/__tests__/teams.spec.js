import teams from '../teams';
import { expectLength, expectString, expectObject } from '../../utils/tests';

describe('teams', () => {
    it('default export to be an object', expectObject(teams));
    it('default export to have length', expectLength(Object.values(teams)));

    Object.values(teams).forEach(team => {
        it('team to be an object', expectObject(team));
        it('team.id to be a string', expectString(team.id));
        it('team.name to be a string', expectString(team.name));
    });
});
