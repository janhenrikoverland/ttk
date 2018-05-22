import { getNewArray, getFilledArrayByInterval } from '../ds';

describe('utils/ds', () => {
    describe('getNewArray', () => {
        it('should create new array of provided length with undefined items', () => {
            const actualState = getNewArray(3);
            const expectedState = [undefined, undefined, undefined];

            expect(actualState).toEqual(expectedState);
        });
    });

    describe('getFilledArrayByInterval', () => {
        it('should return empty array by default', () => {
            const actualState = getFilledArrayByInterval();
            const expectedState = [];

            expect(actualState).toEqual(expectedState);
        });

        it('should fill array by interval', () => {
            const actualState = getFilledArrayByInterval(['first', 'second'], 2);
            const expectedState = ['first', 'first', 'second', 'second'];

            expect(actualState).toEqual(expectedState);
        });
    });
});
