'use strict';
import * as FetchModule from './fetchFunctions.js';
export {FetchModule} ;

const gender = {
    male: 'images/male-sign.svg',
    female: 'images/female-sign.svg'
};
const pagination={
    next:'',
    previous:''
};

export function createCharacterCard(character) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = FetchModule.IMAGES[character.name];
    card.append(img);
    card.classList.add('card');
    const cardTextBlock = document.createElement('div');
    cardTextBlock.classList.add('cardText');
    card.append(cardTextBlock);
    const cardText = `<h2>${character.name}</h2><p>${character.birth_year}</p>`;
    cardTextBlock.insertAdjacentHTML('afterbegin', cardText);

    if (character.gender in gender) {
        const imgGender = document.createElement('img');
        imgGender.classList.add('imgGender');
        card.append(imgGender);
        imgGender.src = gender[character.gender];
    }
    return card;
}

export function createPlanetCard(planet) {
    const {name, climate, diameter, population} = planet;
    const planetCard = document.createElement('div');
    planetCard.classList.add('d-flex', 'card', 'planet-card');
    const planetTitle = `<h2>${name}</h2>`;
    const planetDescription = `<div><p>climate: ${climate}</p><p>diameter: ${diameter}</p><p>population: ${population}</p></div>`;
    planetCard.insertAdjacentHTML('afterbegin', planetTitle + planetDescription);
    return planetCard;
}

export function createFilmCard(film) {
    const {title, opening_crawl, producer, release_date} = film;
    const filmCard = document.createElement('div');
    filmCard.classList.add('d-flex', 'card', 'film-card');
    const filmTitle = `<h2>${title}</h2>`;
    const filmDescription = `<div><p>producer: ${producer}</p><p>release date: ${release_date}</p><p>${opening_crawl}</p></div>`;
    filmCard.insertAdjacentHTML('afterbegin', filmTitle + filmDescription);
    return filmCard;
}

export function showCards(event, renderPlace) {
    renderPlace.innerHTML = '';
    switch (event.target.name) {
        case 'next-btn':
        case 'previous-btn':
        case 'planets-btn': {
            FetchModule.getAllPlanets(event.target.dataset.page)
                .then(result => {
                    createPaginationBlock(result.queryParams.previous, result.queryParams.next, renderPlace)
                    return result.results.map(planet => createPlanetCard(planet))
                })
                .then(cards => cards.forEach(item => renderPlace.append(item)));
            break;
        }
        case 'characters-btn': {
            FetchModule.getCharactersByEpisodeId()
                .then(characters => characters.map(character => createCharacterCard(character)))
                .then(cards => cards.forEach(item => renderPlace.append(item)));
            break;
        }
    }
}

export function showFilmInfoByNumber(event, renderPlace) {
    event.preventDefault();
    const form = new FormData(event.target);
    FetchModule.getFilmInfoByNumber(form.get("film_number"))
        .then(film => createFilmCard(film))
        .then(card => renderPlace.append(card));
}

function createPaginationBlock(previous, next, renderPlace) {
    const paginationBlock = document.createElement('div');
    paginationBlock.classList.add('d-flex', 'pagination');

    const prevBtn = document.createElement("button");
    prevBtn.textContent='<<<';
    prevBtn.classList.add('navigation-btn');
    prevBtn.name = 'previous-btn';
    previous ? prevBtn.setAttribute('data-page', previous) : prevBtn.setAttribute('data-page', '?page=6');

    const nextBtn = document.createElement("button");
    nextBtn.textContent='>>>';
    nextBtn.classList.add('navigation-btn');
    nextBtn.name = 'next-btn';
    if(next) nextBtn.setAttribute('data-page', next);
    paginationBlock.append(prevBtn, nextBtn);
    paginationBlock.addEventListener('click',(event)=> showCards(event, renderPlace) );
    renderPlace.append(paginationBlock);

}
