const random = () => Math.floor(Math.random() * 256);

function getRandomColor() {
    return `rgb(${random()}, ${random()}, ${random()})`;
}

export function generateBlocksInterval(destinationPlace) {
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('container');
        destinationPlace.append(row);
        for (let j = 0; j < 5; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            setInterval(() => block.style.backgroundColor = getRandomColor(), 1000);
            row.append(block);
        }
    }
}
