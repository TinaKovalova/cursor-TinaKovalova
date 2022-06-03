'use strict';
const getRandomArray = (length, min, max) => {
    const randomArray = [];
    if (min > max) {
        alert('Невірно вказаний діапазон ( min більше за max )');
    } else {
        for (let i = 0; i < length; i++) {
            randomArray.push(Math.floor(Math.random() * (max - min) + min));
        }
    }
    return randomArray;
};

const getModa = (...numbers) => {
    const uniqueNumbers = new Set(numbers.filter(item => Number.isInteger(item)));
    let max = 0;
    const result = [];
    uniqueNumbers.forEach(uniqueNumber => {
        const count = numbers.filter(number => number === uniqueNumber).length
        if (max < count) max = count;
        result.push({uniqueNumber, count});
    });
    return result.filter((item) => item.count == max).map(i => i.uniqueNumber).join();
};

const getAverage = (...numbers) => {
    const integerNumbers = numbers.filter(number => Number.isInteger(number));
    return integerNumbers.reduce((sum, current) => sum + current, 0) / integerNumbers.length;
};

const getMedian = (...numbers) => {
    const integerNumbers = [...numbers]
        .filter(number => Number.isInteger(number))
        .sort((a, b) => a - b);
    const middle = integerNumbers.length / 2;
    return Number.isInteger(middle) ? (integerNumbers[middle - 1] + integerNumbers[middle]) / 2 : integerNumbers[Math.floor(middle)];
};

const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2 !== 0);

const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;

const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 == 0 && number);

const replaceBadWords = (string, ...badWords) => {
    const badWordsArray = ['shit', 'fuck'];
    if (badWords.length) {
        badWordsArray.push(...badWords.map(item => item.toLowerCase()).filter(word => !badWordsArray.includes(word)));
    }
    const result = string.split(' ').map(word => {
        const wordTLC = word.toLowerCase();
        badWordsArray.forEach(badWord => {
            if (wordTLC.includes(badWord)) {
                word = wordTLC.replaceAll(badWord, new Array(badWord.length).fill('*').join(''));
            }
        });
        return word;
    }).join(' ');
    return result;

};

const divideByThree = (word) => {
    const lettersOfTheWord = [...word.toLowerCase()].filter(item => item !== ' ');
    const arr = [];
    let i = Math.ceil(lettersOfTheWord.length / 3);
    for (; i > 0; i--) {
        arr.push(lettersOfTheWord.splice(0, 3).join(''))
    }
    return arr;
};

const generateCombinations = (word) => {
    let res = [];
    if (word.length > 10) {
        alert(`Довжина слова '${word}' більше 10 букв!`);
        return res;
    }
    let arr = [...word];
    if (arr.length <= 1) return [word];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 2) {
            res.push([arr[i], arr[(i + 1) % 2]].join(''));
        } else {
            const firstLetter = arr.splice(0, 1);
            const combinations = generateCombinations(arr.join(''));
            combinations.forEach(item => res.push(item + firstLetter));
            arr = [...arr, ...firstLetter];
        }
    }
    return res;
};

console.log('getRandomArray(6, 20, 60)=> ', getRandomArray(6, 20, 60));
//console.log('getRandomArray(6, 80, 60)=> ', getRandomArray(6, 80, 60));
console.log('getModa(2, 56, 62, 2, 2)=> ', getModa(2, 56, 62, 2, 2));
console.log('getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=> ',
    getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log('getModa(6, 2, 6, 6, 8, 9, 9, 9, 0)=>', getModa(6, 2, 6, 6, 8, 9, 9, 9, 0));

console.log('getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=> ',
    getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('getMedian(1, 5, 3, 4, 2)=>', getMedian(1, 5, 3, 4, 2));
console.log('getMedian(1, 2, 3, 4)=>', getMedian(1, 2, 3, 4));
console.log('getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=>',
    getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log('filterEvenNumbers(1, 2, 3, 4, 5, 6)=> ', filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log('countPositiveNumbers(1, -2, 3, -4, -5, 6)=>', countPositiveNumbers(1, -2, 3, -4, -5, 6));

console.log('getDividedByFive(0, 2, 55, 0, 10)=>', getDividedByFive(0, 2, 55, 0, 10));
console.log('getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)=>',
    getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log(`replaceBadWords('Are you fucking kidding?', 'shock', 'Fuck')=>`,
    replaceBadWords('Are you fucking kidding?', 'shock', 'Fuck'));
console.log('replaceBadWords(`It\'s bullshit!`=>', replaceBadWords(`It's bullshit!`));

console.log(`divideByThree('Commander')=> `, divideByThree('Commander'));
console.log(`divideByThree('Are you fucking kidding?')=>`, divideByThree('Are you fucking kidding?'));
console.log(`divideByThree('Live')=>`, divideByThree('Live'));
console.log(`divideByThree('Dir')=>`, divideByThree('Dir'));

console.log(`generateCombinations('man')=>`, generateCombinations('man'));
//console.log(`generateCombinations('Netherlands')=>`, generateCombinations('Netherlands'));


