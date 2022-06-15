'use strict';
const body = document.querySelector('body');

function getRandomColor() {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
}

function generateBlocksInterval() {
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('container');
        body.append(row);
        for (let j = 0; j < 5; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            setInterval(() => block.style.backgroundColor = getRandomColor(), 1000);
            row.append(block);
        }
    }
}

generateBlocksInterval();