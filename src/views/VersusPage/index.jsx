import React, { useEffect, useState } from 'react';

import Versus from '../../components/Versus';
import VersusModes from '../../components/VersusModes';

import versusModeAudioUrl from '../../assets/audio/mode-changes.mp3';
import fightModeAudioUrl from '../../assets/audio/fight-mode.mp3';

import LogoDragon from '../../assets/logo';

import './styles.scss';

const INITIAL_MODE = 'Dragon';
const MODES = [ 'Dragon', 'MK', 'Yin_Yang', 'Three', 'Question_Mark', 'Lightening_Bolt', 'Goro',  'Rayden', 'Shao_Kahn', 'Skull' ];
const MODES_COUNT = 6;

const VersusPage = ({ keyName, selectedChampions }) => {
    const [modeAudio] = useState(new Audio(versusModeAudioUrl));
    const [fightAudio] = useState(new Audio(fightModeAudioUrl));
    const [modes, setModes] = useState(new Array(MODES_COUNT).fill(INITIAL_MODE));
    const [modesCounter, setModesCounter] = useState(new Array(MODES_COUNT).fill(0));

    const [startFight, setStartFight] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStartFight(true);
            fightAudio.loop = true;
            fightAudio.play();
        }, 4000);
    }, []);

    const changeMode = (modeIndex) => {
        if (modesCounter[modeIndex] + 1 < MODES.length) {
            setModesCounter(modesCounter.map((el, index) => index === modeIndex ? el + 1 : el));
            setModes(modes.map((el, index) => index === modeIndex ? MODES[modesCounter[modeIndex] + 1] : el))
        } else {
            setModesCounter(modesCounter.map((el, index) => index === modeIndex ? 0 : el));
            setModes(modes.map((el, index) => index === modeIndex ? MODES[0] : el))
        }
    };

    const detectKeyDown = (key) => {
        if (key === 'q' || key === 'Q') {
            changeMode(0);
            modeAudio.play();
        }
        if (key === 'w' || key === 'W') {
            modeAudio.play();
            changeMode(1);
        }
        if (key === 'e' || key === 'E') {
            modeAudio.play();
            changeMode(2);
        }
        if (key === 'r' || key === 'R') {
            modeAudio.play();
            changeMode(3);
        }
        if (key === 't' || key === 'T') {
            modeAudio.play();
            changeMode(4);
        }
        if (key === 'y' || key === 'Y') {
            modeAudio.play();
            changeMode(5);
        }
    };

    useEffect(() => {
        if (keyName) {
            detectKeyDown(keyName);
        }
    }, [keyName]);

    return (
        <div className={`versus-page ${!startFight ? 'versus' : ''}`}>
            {!startFight ? <>
                <div className="versus-page__header">
                    <div className="versus-page__logo left-logo">
                        <img src={LogoDragon.Dragon_White} alt="versus" />
                    </div>
                    <h2 className="versus-page__title">Battle</h2>
                    <div className="versus-page__logo right-logo">
                        <img src={LogoDragon.Dragon_White} alt="versus" />
                    </div>
                </div>
                <Versus selectedChampions={selectedChampions} />
                <VersusModes modes={modes}/>
            </>
            : <div className="versus-page__logo fight">
                <img src={LogoDragon.Dragon_Classic} alt="versus" />
            </div>}
        </div>
    )
};

export default VersusPage;
