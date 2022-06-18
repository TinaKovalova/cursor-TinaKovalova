'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const sounds = {
    KeyA: 'audio/keyA.mp3',
    KeyS: '',
    KeyD: '',
    KeyF: '',
    KeyG: '',
    KeyH: '',
    KeyJ: '',
    KeyK: '',
    KeyL: ''
};
let currentSoundBlock = null;

function playSound(event) {
    const key = event.type == 'keydown' && event.code in sounds ? event.code : event.target.id;
    console.log({key})
    if (key) {
        currentSoundBlock?.classList.toggle('key-sound-selected');
        const selectedSoundBlock = document.querySelector(`#${key}`);
        currentSoundBlock = selectedSoundBlock;
        selectedSoundBlock.classList.toggle('key-sound-selected');
        const sound = new Audio(sounds[key]);
        sound.play();
    }
}

body.addEventListener('keydown', (event) => playSound(event));
container.addEventListener('click', (event) => playSound(event));