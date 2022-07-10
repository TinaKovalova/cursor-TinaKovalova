'use strict';
import drumsCongaSingleHit from '../sounds/drumsCongaSingleHit.mp3';
import bassDrumDoubleKick from '../sounds/bassDrumDoubleKick.mp3';
import bassDrumSingleHit from '../sounds/bassDrumSingleHit.mp3';
import cymbalBellCrashSoundEffect from '../sounds/cymbalBellCrashSoundEffect.mp3';
import cymbalSmallCrash from '../sounds/cymbalSmallCrash.mp3';
import drumsTomTomDoubleHit from '../sounds/drumsTomTomDoubleHit.mp3';
import drumsTomTomSingleHit from '../sounds/drumsTomTomSingleHit.mp3';
import snareDrumSingleHit from '../sounds/snareDrumSingleHit.mp3';
import triangleSingleHit from '../sounds/triangleSingleHit.mp3';

const sounds = {
    KeyA: drumsCongaSingleHit,
    KeyS: drumsTomTomDoubleHit,
    KeyD: drumsTomTomSingleHit,
    KeyF: snareDrumSingleHit,
    KeyG: cymbalBellCrashSoundEffect,
    KeyH: cymbalSmallCrash,
    KeyJ: bassDrumDoubleKick,
    KeyK: bassDrumSingleHit,
    KeyL: triangleSingleHit
};
let currentSoundBlock = null;

export function playSound(event) {
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

