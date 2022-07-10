'use strict';
export const getAverage = (...numbers) => {
    const integerNumbers = numbers.filter(number => Number.isInteger(number));
    return integerNumbers.reduce((sum, current) => sum + current, 0) / integerNumbers.length;
};