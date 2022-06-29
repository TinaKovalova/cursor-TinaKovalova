'use strict';
const filmInfoForm = document.querySelector('#form');
const getCharactersInfoBtn = document.querySelector('.getInfo');
const getCharacterBtn = document.querySelector('.character');
const getPlanetsBtn = document.querySelector('.planet');
const infoPlace = document.querySelector('.main-info-place');
const wokee = document.querySelector('.wookiee');
const BASE_URL = 'https://swapi.dev/api/';
const gender = {
    male: 'images/male-sign.svg',
    female: 'images/female-sign.svg',
    //'n/a':'images/robot.svg',
}
const images = {};


function getImagesForAllCharacters() {
    const base_URL = `https://akabab.github.io/starwars-api/api/all.json`;
    fetch(base_URL)
        .then(response => response.json())
        .then(result => result.forEach(character => images[character.name] = character.image))
    console.log(images)
}

async function getCharacterById(id = 2) {
    const request = await fetch(`${BASE_URL}people/${id}/`);
    const response = await request.json();
    //console.log(response);
    return response
}

async function getFilmInfoByNumber(filmNumber = 0) {
    const request = await fetch(`${BASE_URL}films/${filmNumber}/`);
    const response = await request.json();
    console.log(response)
    return response;
}


async function getCharactersByEpisodeId(episodeId = 5) {
    const request = await fetch(`${BASE_URL}films/`);
    const {results} = await request.json();
    const film = results.find(film => film.episode_id == episodeId);
    const allCharacters = [];
    for (const link of film.characters) {
        const id = link.split('/').slice(-2, -1)[0];
        const {name, birth_year, gender} = await getCharacterById(id);
        //console.log({name, birth_year, gender})
        allCharacters.push({name, birth_year, gender});
    }
    //console.log(allCharacters)
    //повне ім'я персонажа, дата народження, стать
    return allCharacters;
}

async function getAllPlanets() {
    const request = await fetch(`${BASE_URL}planets/`);
    const {results} = await request.json();
    console.log(results)
    return results;
}

function createCard(obj) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('photo')

    img.src = images[obj.name];
    card.append(img);
    card.classList.add('card');
    const cardText = document.createElement('div');
    cardText.classList.add('cardText');
    card.append(cardText)
    const htmlCardText=`<h3>${obj.name}</h3><p>${obj.birth_year}</p>`;
    cardText.insertAdjacentHTML('afterbegin', htmlCardText);

    if ( obj.gender in gender) {
        const imgGender = document.createElement('img');
        imgGender.classList.add('imgGender')
        card.append(imgGender);
        imgGender.src = gender[obj.gender];
    }

    return card;

}

function showCards(event) {
    infoPlace.innerHTML = ''
    const target = event.target;
    let data;
    switch (target.name) {
        case 'characters-btn': {
            data = getCharactersByEpisodeId();
            break;
        }
        case 'character-btn': {
            getCharacterById()
                .then(character => createCard(character))
                .then(card => infoPlace.append(card))
            break;
        }
        case 'planets-btn': {
            data = getAllPlanets();
            break;
        }
    }
    data
        .then(result => result.map(item => createCard(item)))
        .then(cards => cards.forEach(item => infoPlace.append(item)));
}

function showFilmInfoByNumber(event) {
    infoPlace.innerHTML = ''
    event.preventDefault();
    const form = new FormData(filmInfoForm);
    getFilmInfoByNumber(form.get("film_number"))
        .then(film => createCard(film))
        .then(card => infoPlace.append(card))
}


filmInfoForm.addEventListener('submit', (event) => showFilmInfoByNumber(event));
getCharactersInfoBtn.addEventListener('click', showCards);
getCharacterBtn.addEventListener('click', showCards);
getPlanetsBtn.addEventListener('click', showCards);
wokee.addEventListener('click', getImagesForAllCharacters)
document.addEventListener("DOMContentLoaded", getImagesForAllCharacters)