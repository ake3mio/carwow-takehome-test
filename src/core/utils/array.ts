export const createArray = (length, mapFn = (x, i) => x) => {
    if (Array.from) {
        return Array.from({length}, mapFn);
    }

    const out: any[] = [];

    for (let i = 0; i < length; i++) {
        out.push(mapFn(i, i));
    }

    return out;
};
