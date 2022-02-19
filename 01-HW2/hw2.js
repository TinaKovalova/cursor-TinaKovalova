'use strict';
let start;
let finish;
let counter = 0;

do {
    start = +prompt('Від якого числа ми будемо складати? Введіть ціле число');
} while (start % 1 != 0)

do {
    finish = +prompt('До якого числа ми будемо складати? Введіть ціле число');
} while (finish % 1 != 0)

const skip = confirm('Чи потрібно пропускати парні числа?');

document.writeln(`<div>Складання чисел від ${start} до ${finish}</div>`);
document.writeln(`<div>Пропускати парні: ${skip}</div>`);

for (let i = start; i <= finish; i++) {
    if (skip && i % 2 == 0) continue;
    counter += i;
}

document.writeln(`Результат: ${counter}`);