'use strict';
const getMaxDigit=(number)=>{
    const digitsArr = number.toString().split('').map(item => Number(item));
    const maxDigit = Math.max(...digitsArr);
    return maxDigit;
}

const getPowNumber=(number, power)=>{
    let result=1;
    if(power<0){
        for(let i=power;i<0;i++){
            result*=number;
        }
        result=1/result;
    }else if (power>0){
        for(let i=0;i<power;i++){
            result*=number;
        }
    }
    return result;
}

const nameFormatter=(name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
const salaryWithoutTaxes=(salary, taxes = 19.5)=>salary - salary * taxes / 100;
const getRandomNumber=(start, finish)=>Math.floor(Math.random() * (finish - start)+start);

const countLetter=(letter, word)=> {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++;
    }
    return counter;
}

const convertCurrency=(sum, currency = 25)=>{
    let result;
    const data = sum.toUpperCase();
    const cash=parseInt(sum);
    if (data.includes('$') && !Number.isNaN(cash)) {
        result = cash * currency;
    } else if (data.includes('UAH') && !Number.isNaN(cash)) {
        result = cash / currency;
    } else {
        result = 'Помилка: Конвертуються тільки $ або UAH, інші валюти не конвертуються';
    }
    return result;
}

const getRandomPassword=(length = 8)=>{
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        newPassword += Math.floor(Math.random() * 10)
    }
    return newPassword;
}
const deleteLetters=(letter, word)=> word.split(letter).join('');

const isPalyndrom=(word)=>{
    const baseWord = word.split(' ').join('').toLowerCase();
    const reverseWord = [...baseWord].reverse().join('').toLowerCase();
    return baseWord === reverseWord;
}
const deleteDuplicateLetter=(text)=>{
    let str = text.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (i != str.lastIndexOf(str[i])) {
            str = str.split(str[i]).join('');
            i--;
        }
    }
    return str;
}
console.log(`Функція №1: getMaxDigit(1236) => ${getMaxDigit(1236)}`);
console.log(`Функція №2: getPowNumber(2, 4)=>${getPowNumber(2, 4)}`);
console.log(`getPowNumber(2, -4)=> ${getPowNumber(2, -4)}`);
console.log(`getPowNumber(2,0)=> ${getPowNumber(2, 0)}`);
console.log(`Функція №3: nameFormatter('влад')=>${nameFormatter('влад')}`);
console.log(`nameFormatter('вЛАД')=> ${nameFormatter('вЛАД')}`);
console.log(`Функція №4: salaryWithoutTaxes(1000)=>${salaryWithoutTaxes(1000)}`);
console.log(`Функція №5: getRandomNumber(1, 10)=>${getRandomNumber(1, 10)}`);
console.log(`Функція №6: countLetter('a', 'Americaaaaa')=>${countLetter('a', 'Americaaaaa')}`);
console.log(`Функція №7:convertCurrency('100$')=>${convertCurrency('100$')}UAH`);
console.log(`convertCurrency('2500UAH')=> ${convertCurrency('2500UAH')}$`);
console.log(`convertCurrency('100EUR')=> ${convertCurrency('100EUR')}`);
console.log(`Функція №8: getRandomPassword(4)=>${getRandomPassword(4)}`);
console.log(`getRandomPassword()=> ${getRandomPassword()}`);
console.log(`Функція №9: deleteLetters('a', 'blablabla')=>${deleteLetters('a', 'blablabla')}`);
console.log(`Функція №10: isPalyndrom('madam')=>${isPalyndrom('madam')}`);
console.log(`isPalyndrom('Я несу гусеня')=>${isPalyndrom('Я несу гусеня')}`);
console.log(`isPalyndrom('кокос')=>${isPalyndrom('кокос')}`);
console.log(`Функція №11: deleteDuplicateLetter('Бісквіт був дуже ніжним')=>${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);

export {nameFormatter};