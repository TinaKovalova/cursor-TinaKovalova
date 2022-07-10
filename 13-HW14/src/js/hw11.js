'use strict';

export async function getRandomChinese(length) {
    if (length <= 0) return;
    let chinese = '';
    while (length != 0) {
        chinese += await new Promise(resolve => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5);
                const char = String.fromCharCode(+sign);
                resolve(char)
            }, 50)
        });
        length--;
    }
    return chinese;
}


