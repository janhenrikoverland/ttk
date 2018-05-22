// dep level 1

export const getNewArray = length => new Array(length).fill(undefined);

// del level 2

export const getFilledArrayByInterval = (items = [], interval = 1) => {
    const list = getNewArray(items.length * interval);
    let startIndex;

    items.forEach((item, i) => {
        startIndex = i * interval;
        list.fill(item, startIndex, startIndex + interval);
    });

    return list;
};
