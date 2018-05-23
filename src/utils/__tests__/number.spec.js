import { numberDifference, numberPadZero, numberPadOperator } from '../number';

describe('utils/number', () => {
    describe('numberDifference', () => {
        it('should return difference as positive integer when num1 < num2', () => {
            const expectedState = 1;

            expect(numberDifference(1, 2)).toEqual(expectedState);
        });

        it('should return difference as positive integer when num1 > num2', () => {
            const expectedState = 1;

            expect(numberDifference(2, 1)).toEqual(expectedState);
        });

        it('should return 0 when num1 === num2', () => {
            const expectedState = 0;

            expect(numberDifference(1, 1)).toEqual(expectedState);
        });
    });

    describe('numberPadZero', () => {
        it('should return zero padded number', () => {
            const expectedState = '01';

            expect(numberPadZero(1, 2)).toEqual(expectedState);
        });

        it('should return same number', () => {
            const expectedState = 10;

            expect(numberPadZero(10)).toEqual(expectedState);
        });
    });

    describe('numberPadOperator', () => {
        it('should return plus padded number', () => {
            const expectedState = '+1';

            expect(numberPadOperator(1)).toEqual(expectedState);
        });

        it('should return minus padded number', () => {
            const expectedState = '-1';

            expect(numberPadOperator(-1)).toEqual(expectedState);
        });

        it('should return same number', () => {
            const expectedState = '0';

            expect(numberPadOperator(0)).toEqual(expectedState);
        });
    });
});
