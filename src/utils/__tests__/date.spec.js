import { formatDate } from '../date';

describe('utils/date', () => {
    describe('formatDate', () => {
        it('should return empty string', () => {
            const actualState = formatDate();
            const expectedState = '';

            expect(actualState).toEqual(expectedState);
        });

        it('should pp date from date string', () => {
            const actualState = formatDate('2018-05-18T17:22:08Z');
            const expectedState = '18.mai, 17:22';

            expect(actualState).toEqual(expectedState);
        });
    });
});
