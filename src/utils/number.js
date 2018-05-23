export const numberDifference = (n1, n2) => (n1 - n2 > 0 ? n1 - n2 : n2 - n1);

export const numberPadZero = n => (('' + n).length === 1 ? '0' + n : n);

export const numberPadOperator = n => (n > 0 ? '+' : '') + n;
