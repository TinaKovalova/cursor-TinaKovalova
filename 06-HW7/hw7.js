'use strict'
const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

function getMyTaxes(salary) {
    return Number((salary * this.tax).toFixed(2));
}

function getMiddleTaxes() {
    return Number((this.tax * this.middleSalary).toFixed(2));
}

function getTotalTaxes() {
    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
}

function getMySalary() {
    const result = {};
    setInterval(function () {
        result.salary = Number((Math.random() * (2000 - 1500) + 1500).toFixed(2));
        result.taxes = getMyTaxes.call(this, result.salary);
        result.profit = Number((result.salary - result.taxes).toFixed(2));
        console.log(result);
    }.bind(this), 10000);
}

console.log('getMyTaxes.call(ukraine, 3000) => ', getMyTaxes.call(ukraine, 3000));
console.log('getMiddleTaxes.call(ukraine) => ', getMiddleTaxes.call(ukraine));
console.log('getTotalTaxes.call(ukraine) => ', getTotalTaxes.call(ukraine));
console.log(getMySalary.call(ukraine));
