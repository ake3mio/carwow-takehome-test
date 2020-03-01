const getCurrencyConverter = () => new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

export const convertToPrice = (value: number) => {
    const parts = getCurrencyConverter().formatToParts(value);

    return parts.reduce((price, part) => {
        if (part.type === "fraction" && part.value === "00") {
            return price.substr(0, price.length - 1)
        }
        return price + part.value;
    }, "");
};
