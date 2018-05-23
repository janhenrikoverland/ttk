Array.prototype.sortObjects = (key = 'name', direction = 'asc') => {
    const a = [...this];
    a.sort((a, b) => (direction.toLowerCase() === 'desc' ? b[key] - a[key] : a[key] - b[key]));
};

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
