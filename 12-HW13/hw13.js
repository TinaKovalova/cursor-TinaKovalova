'use strict';

function* createIdGenerator() {
    let id = 1;
    while (id) {
        yield id++;
    }
}

const idGenerator = createIdGenerator();
console.log('idGenerator.next().value ->', idGenerator.next().value);
console.log('idGenerator.next().value ->', idGenerator.next().value);
console.log('idGenerator.next().value ->', idGenerator.next().value);

function* newFontGenerator(fontSize) {
    while (fontSize >= 0) {
        let action = yield fontSize;
        if (action === 'up') {
            fontSize += 2;
        } else if (action === 'down') {
            const result = fontSize - 2;
            fontSize = result < 0 ? fontSize : result;
        }
    }
}

const fontGenerator = newFontGenerator(14);
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//14
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//16
console.log(`fontGenerator.next('up').value-> `, fontGenerator.next('up').value);//18
console.log(`fontGenerator.next().value-> `, fontGenerator.next().value);//18
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//16
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//14
console.log(`fontGenerator.next('down').value-> `, fontGenerator.next('down').value);//12
console.log(`fontGenerator.next().value-> `, fontGenerator.next().value);//12
