'use strict';
const BASE_URL = 'https://swapi.dev/api/';
export async function getAllPlanets(page=null) {
    let url = page? `${BASE_URL}planets/${page}` : `${BASE_URL}planets/`;
    const request = await fetch(url);
    const {results, next, previous} = await request.json();
    const queryParams= {
        next: next?.split('/').slice(-1),
        previous: previous?.split('/').slice(-1)
    };
    return {results, queryParams};
}