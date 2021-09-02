export const expectString = (str) => () => expect(typeof str).toEqual('string');

export const expectLength = (param) => () => expect(!!param.length).toEqual(true);
export const expectLengthToBe = (param, value) => () => expect(param.length).toBe(value);
export const expectNoLength = (param) => () => expect(!!param.length).toEqual(false);

export const expectArray = (array) => () => {
    expect(Array.isArray(array)).toEqual(true);
    expect(!!array).toEqual(true);
};

export const expectObject = (obj) => () => {
    expect(typeof obj).toEqual('object');
    expect(Array.isArray(obj)).toEqual(false);
};
