'use strict';

function getMaxDigit(number) {

    const digitsArr = number.toString().split('').map(item => Number(item));
    const maxDigit = Math.max(...digitsArr);
    return maxDigit;
}

console.log(getMaxDigit(1236));

function getPowNumber(number, pow) {
    let powNumber = 1;
    while (pow > 0) {
        powNumber *= number;
        pow--;
    }
    return powNumber;
}

console.log(getPowNumber(5, 8));

function nameFormatter(name) {
    let formatName = name[0].toUpperCase() + name.toLowerCase().slice(1);
    return formatName;
}

console.log(nameFormatter("tINа"));

function salaryWithoutTaxes(salary, taxes = 19.5) {
    return salary - salary * 19.5 / 100
}

console.log(salaryWithoutTaxes(1000));

function getRandomNumber(start, finish) {
    return Math.floor(Math.random() * (finish - start));
}

console.log(getRandomNumber(1, 10));

function countLetter(letter, word) {

    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++;
    }
    return counter;

}

console.log(countLetter('a', 'Americaaaaa'));

function convertCurrency(sum, currency) {
    let result;
    let data = sum.toString().toUpperCase();
    const getCash = function (text) {
        let index = data.indexOf(text);
        let cash = +data.slice(0, index);
        return cash;
    }
    if (data.includes('$')) {
        result = getCash('$') * currency;
        console.log("getCash('$') "+ getCash('$'));
    } else if (data.includes('UAH')) {
        result = getCash('UAH')/ currency;
        console.log("getCash('UAH') "+ getCash('UAH'));
    } else {
        result = 'Error';
    }
    return result;
}

console.log(convertCurrency('100$', 25));
console.log(convertCurrency('2500UAH', 25));

function getRandomPassword(length = 8) {
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        newPassword += Math.floor(Math.random() * 10)
    }
    return newPassword;
}

console.log(getRandomPassword(4));

function deleteLetters(letter, word) {
    return word.split(letter).join('');
}

console.log(deleteLetters('a', 'blablabla'));