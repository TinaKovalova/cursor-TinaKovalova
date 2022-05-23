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

const nameFormatter=(name) => name[0].toUpperCase() + name.slice(1);
const salaryWithoutTaxes=(salary, taxes = 19.5)=>salary - salary * 19.5 / 100;
const getRandomNumber=(start, finish)=>Math.floor(Math.random() * (finish - start));

const countLetter=(letter, word)=> {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++;
    }
    return counter;
}

const convertCurrency=(sum, currency = 25)=>{
    let result;
    const data = sum.toString().toUpperCase();
    if (data.includes('$')) {
        result = parseInt(sum)* currency;
    } else if (data.includes('UAH')) {
        result = parseInt(sum) / currency;
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

document.writeln(`<div><b>Функція №1:</b><p>getMaxDigit(1236) => ${getMaxDigit(1236)}</p></div>`);
document.writeln(`<div><b>Функція №2:</b><p>getPowNumber(2, 4)=>${getPowNumber(2, 4)}</p></div>`);
document.writeln(`<p>getPowNumber(2, -4)=> ${getPowNumber(2, -4)}<p>`);
document.writeln(`<p>getPowNumber(2,0)=> ${getPowNumber(2, 0)}<p>`);
document.writeln(`<div><b>Функція №3:</b><p>nameFormatter('влад')=>${nameFormatter('влад')}</p></div>`);
document.writeln(`<p>nameFormatter('вЛАД')=> ${nameFormatter('вЛАД')}<p>`);
document.writeln(`<div><b>Функція №4:</b><p>salaryWithoutTaxes(1000)=>${salaryWithoutTaxes(1000)}</p></div>`);
document.writeln(`<div><b>Функція №5:</b><p>getRandomNumber(1, 10)=>${getRandomNumber(1, 10)}</p></div>`);
document.writeln(`<div><b>Функція №6:</b><p>countLetter('a', 'Americaaaaa')=>${countLetter('a', 'Americaaaaa')}</p></div>`);
document.writeln(`<div><b>Функція №7:</b><p>convertCurrency('100$')=>${convertCurrency('100$')}UAH</p></div>`);
document.writeln(`<p>convertCurrency('2500UAH')=> ${convertCurrency('2500UAH')}$<p>`);
document.writeln(`<p>convertCurrency('100EUR')=> ${convertCurrency('100EUR')}<p>`);
document.writeln(`<div><b>Функція №8:</b><p>getRandomPassword(4)=>${getRandomPassword(4)}</p></div>`);
document.writeln(`<p>getRandomPassword()=> ${getRandomPassword()}<p>`);
document.writeln(`<div><b>Функція №9:</b><p>deleteLetters('a', 'blablabla')=>${deleteLetters('a', 'blablabla')}</p></div>`);
document.writeln(`<div><b>Функція №10:</b><p>isPalyndrom('madam')=>${isPalyndrom('madam')}</p></div>`);
document.writeln(`<p>isPalyndrom('Я несу гусеня')=>${isPalyndrom('Я несу гусеня')}</p>`);
document.writeln(`<p>isPalyndrom('кокос')=>${isPalyndrom('кокос')}</p>`);
document.writeln(`<div><b>Функція №11:</b><p>deleteDuplicateLetter('Бісквіт був дуже ніжним')=>${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</p></div>`);