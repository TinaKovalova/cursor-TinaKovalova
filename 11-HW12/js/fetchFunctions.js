'use strict';
const CHARACTERS_IMAGES_URL = `https://akabab.github.io/starwars-api/api/all.json`;
const BASE_URL = 'https://swapi.dev/api/';
export const IMAGES={}

export async function getImagesForAllCharacters() {
    const request = await fetch(CHARACTERS_IMAGES_URL);
    const response = await request.json();
    response.forEach(character => IMAGES[character.name] = character.image);
}

export async function getCharacterById(id) {
    const request = await fetch(`${BASE_URL}people/${id}/`);
    const response = await request.json();
    return response
}
export async function getFilmInfoByNumber(filmNumber) {
    const request = await fetch(`${BASE_URL}films/${filmNumber}/`);
    const response = await request.json();
    return response;
}

export async function getCharactersByEpisodeId(episodeId = 5) {
    const request = await fetch(`${BASE_URL}films/`);
    const {results} = await request.json();
    const film = results.find(film => film.episode_id == episodeId);
    const allCharacters = [];
    for (const link of film.characters) {
        const id = link.split('/').slice(-2, -1)[0];
        const {name, birth_year, gender} = await getCharacterById(id);
        allCharacters.push({name, birth_year, gender});
    }
    return allCharacters;
}

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
