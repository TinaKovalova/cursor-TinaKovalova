'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');
const sounds = {
    KeyA: 'sounds/drumsCongaSingleHit.mp3',
    KeyS: 'sounds/drumsTomTomDoubleHit.mp3',
    KeyD: 'sounds/drumsTomTomSingleHit.mp3',
    KeyF: 'sounds/snareDrumSingleHit.mp3',
    KeyG: 'sounds/cymbalBellCrashSoundEffect.mp3',
    KeyH: 'sounds/cymbalSmallCrash.mp3',
    KeyJ: 'sounds/bassDrumDoubleKick.mp3',
    KeyK: 'sounds/bassDrumSingleHit.mp3',
    KeyL: 'sounds/triangleSingleHit.mp3'
};
let currentSoundBlock = null;

function playSound(event) {
    if (event.repeat) return;
    const key = event.type == 'keydown' && event.code in sounds ? event.code : event.target.id || event.target.parentElement.id;
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