'use strict';
function getMyTaxes(salary) {
    return Number((salary * this.tax).toFixed(2));
}

export function getMySalary() {
    const result = {};
    setInterval(function () {
        result.salary = Number((Math.random() * (2000 - 1500) + 1500).toFixed(2));
        result.taxes = getMyTaxes.call(this, result.salary);
        result.profit = Number((result.salary - result.taxes).toFixed(2));
        console.log(result);
    }.bind(this), 10000);
}