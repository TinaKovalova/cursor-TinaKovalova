'use strict';

export function* createIdGenerator() {
    let id = 1;
    while (id) {
        yield id++;
    }
}




