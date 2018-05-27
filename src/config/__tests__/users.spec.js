import users from '../users';
import { expectLength, expectString, expectObject } from '../../utils/tests';

describe('users', () => {
    it('default export to be an object', expectObject(users));
    it('default export to have length', expectLength(Object.values(users)));

    Object.values(users).forEach(user => {
        it('user to be an object', expectObject(user));
        it('user.id to be a string', expectString(user.id));
        it('user.name to be a string', expectString(user.name));
    });
});
