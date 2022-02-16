'use strict';
let orange = 15.678;
let tomato = 123.965;
let milk = 90.2345;

const maxPrice = Math.max(orange, tomato, milk);
console.log(`Максимальне число: ${maxPrice}`);

const minPrice = Math.min(orange, tomato, milk);
console.log(`Мінімальне число : ${minPrice}`);

const sum = orange + tomato + milk;
console.log(`Загальна вартість всіх товарів : ${sum}`);

const sumRoundOfPrices = Math.floor(orange) + Math.floor(tomato) + Math.floor(milk);
console.log(`Загальна вартість всіх товарів без копійок: ${sumRoundOfPrices}`);

const sumRound = 100 - sumRoundOfPrices % 100 + sumRoundOfPrices;
console.log(`Сума товарів округлена до сотень: ${sumRound}`);

const x = Boolean(sumRoundOfPrices % 2);

if (sumRoundOfPrices % 2 == 0) {
    console.log(`Сума всіх товарів ${sumRoundOfPrices} парне число`);
} else {
    console.log(`Сума всіх товарів ${sumRoundOfPrices} непарне число`);
}

const cash = 500;
const change = cash - sum;
console.log(`Клієнт платить 500 грн.Сума решти: ${change}`);

const avgSum = (sum / 3).toFixed(2);
console.log(`Середнє значення цін: ${avgSum}`);

const percentage = Math.floor(Math.random() * (30 - 3) + 3);
const discount = (sum * percentage / 100).toFixed(2);
console.log(`Знижка ${percentage} %: ${discount} грн `);

const pay = sum - discount;
console.log(`Сума до оплати: ${pay.toFixed(2)}`);

const profit = sum / 2 - discount;
console.log(`Чистий прибуток: ${profit.toFixed(2)}`);

//Advanced
const str = `Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sum}
Знижка ${percentage} %: ${discount} грн.
Сума до оплати: ${pay.toFixed(2)}
Чистий прибуток: ${profit.toFixed(2)}`;
console.log(str);

