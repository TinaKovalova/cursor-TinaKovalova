'use strict';

import * as Functions from './functions.js'
import {FetchModule} from "./functions.js";

const filmInfoForm = document.querySelector('#form');
const menu = document.querySelector('.main-menu');
const infoPlace = document.querySelector('.info-place-container');

document.addEventListener("DOMContentLoaded", FetchModule.getImagesForAllCharacters)
filmInfoForm.addEventListener('submit', (event) => Functions.showFilmInfoByNumber(event,infoPlace));
menu.addEventListener('click',(event)=> Functions.showCards(event,infoPlace));

