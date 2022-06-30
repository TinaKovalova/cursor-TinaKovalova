'use strict';
const filmInfoForm = document.querySelector('#form');
const getCharactersInfoBtn = document.querySelector('.getInfo');
const getCharacterBtn = document.querySelector('.character');
const getPlanetsBtn = document.querySelector('.planet');
const infoPlace = document.querySelector('.info-place-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

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
    console.log(results)
    const film = results.find(film => film.episode_id == episodeId);
    const allCharacters = [];
    for (const link of film.characters) {
        const id = link.split('/').slice(-2, -1)[0];
        const {name, birth_year, gender} = await getCharacterById(id);
        //console.log({name, birth_year, gender})
        allCharacters.push({name, birth_year, gender});
    }
    console.log(allCharacters)
    //повне ім'я персонажа, дата народження, стать
    return allCharacters;
}

async function getAllPlanets(page=null) {
    let url = page? `${BASE_URL}planets/${page}` : `${BASE_URL}planets/`;
    console.log(url)
    const request = await fetch(url);
    const {results, next, previous} = await request.json();
    console.log({previous, next})

    const query= {
        next: next?.split('/').slice(-1),
        previous: previous?.split('/').slice(-1)
    };

    query.next ? nextBtn.setAttribute('data-page', query.next) :  nextBtn.removeAttribute('data-page');;
    query.previous ? prevBtn.setAttribute('data-page', query.previous):  prevBtn.removeAttribute('data-page');;

    console.log(results)
    return results;
}

function createCharacterCard(character) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('photo')
    img.src = images[character.name];
    card.append(img);
    card.classList.add('card');
    const cardText = document.createElement('div');
    cardText.classList.add('cardText');
    card.append(cardText)
    const htmlCardText = `<h3>${character.name}</h3><p>${character.birth_year}</p>`;
    cardText.insertAdjacentHTML('afterbegin', htmlCardText);

    if (character.gender in gender) {
        const imgGender = document.createElement('img');
        imgGender.classList.add('imgGender')
        card.append(imgGender);
        imgGender.src = gender[character.gender];
    }

    return card;

}

function createPlanetCard(planet) {
    const {name, climate, diameter, population} = planet;

    const planetCard = document.createElement('div');
    planetCard.classList.add('card', 'planet-card');
    const planetDescription = `<div><h3>${name}</h3></div><div ><p>climate: ${climate}</p><p>diameter: ${diameter}</p><p>population: ${population}</p></div>`;
    planetCard.insertAdjacentHTML('afterbegin', planetDescription);
    return planetCard;
}

function showCards(event) {
    infoPlace.innerHTML = ''
    const target = event.target;
    console.log(target.name)
    switch (target.name) {
        case 'next-btn':
        case 'previous-btn':
        case 'planets-btn': {
            console.log(target)

            getAllPlanets(target.dataset.page)
                .then(planets => planets.map(planet => createPlanetCard(planet)))
                .then(cards => cards.forEach(item => infoPlace.append(item)));
            //
            // getAllPlanets()
            //     .then(planets => planets.map(planet => createPlanetCard(planet)))
            //     .then(cards => cards.forEach(item => infoPlace.append(item)));
            break;
        }
        case 'characters-btn': {
            getCharactersByEpisodeId()
                .then(characters => characters.map(character => createCharacterCard(character)))
                .then(cards => cards.forEach(item => infoPlace.append(item)));
            break;
        }
        case 'character-btn': {
            getCharacterById()
                .then(character => createCharacterCard(character))
                .then(card => infoPlace.append(card))
            break;
        }

    }

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
nextBtn.addEventListener('click', showCards)
prevBtn.addEventListener('click', showCards)

document.addEventListener("DOMContentLoaded", getImagesForAllCharacters)