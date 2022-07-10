'use strict';
export function sumNumbers() {
    let start;
    let finish;
    let counter = 0;

    do {
        start = +prompt('Від якого числа ми будемо складати? Введіть ціле число', '0');
        if (!Number.isInteger(start)) alert("Некоректно введені дані");
    } while (!Number.isInteger(start))

    do {
        finish = +prompt('До якого числа ми будемо складати? Введіть ціле число');
        if (!Number.isInteger(finish)) {
            alert("Некоректно введені дані");
        } else if (finish < start) {
            alert('Введіть ціле число більше ніж начальне значення відліку!');
        }
    } while (!Number.isInteger(finish) || finish < start)

    const skip = confirm('Чи потрібно пропускати парні числа?');
    for (let i = start; i <= finish; i++) {
        if (skip && i % 2 == 0) continue;
        counter += i;
    }
    return counter;
}