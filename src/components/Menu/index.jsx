import React, { useEffect, useState } from 'react';
import ChampionsPreview from './ChampionsPrewiew';

import Champions from '../../assets';

import './styles.scss';

const CHAMPIONS_COUNT = 15;

const Menu = ({ keyName, setChampion, menuAudio }) => {
    const [firstActiveChampionIndex, setFirstActiveChampionIndex] = useState(1);
    const [secondActiveChampionIndex, setSecondActiveChampionIndex] = useState(5);

    const detectKeyDown = (key) => {
        menuAudio.loop = true;
        menuAudio.play();

        if (key === 'ArrowUp') {
            const championIndex = firstActiveChampionIndex - 5;
            championIndex <= 0 ? setFirstActiveChampionIndex(CHAMPIONS_COUNT + championIndex) : setFirstActiveChampionIndex(championIndex);
        }
        if (key === 'ArrowDown') {
            const championIndex = firstActiveChampionIndex + 5;
            championIndex > CHAMPIONS_COUNT ? setFirstActiveChampionIndex(championIndex - CHAMPIONS_COUNT) : setFirstActiveChampionIndex(championIndex);
        }
        if (key === 'ArrowLeft') {
            const championIndex = firstActiveChampionIndex - 1;
            championIndex <= 0 ? setFirstActiveChampionIndex(CHAMPIONS_COUNT + championIndex) : setFirstActiveChampionIndex(championIndex);
        }
        if (key === 'ArrowRight') {
            const championIndex = firstActiveChampionIndex + 1;
            championIndex > CHAMPIONS_COUNT ? setFirstActiveChampionIndex(championIndex - CHAMPIONS_COUNT) : setFirstActiveChampionIndex(championIndex);
        }
        if (key === 'i' || key === 'I') {
            const championIndex = secondActiveChampionIndex - 5;
            championIndex <= 0 ? setSecondActiveChampionIndex(CHAMPIONS_COUNT + championIndex) : setSecondActiveChampionIndex(championIndex);
        }
        if (key === 'k' || key === 'K') {
            const championIndex = secondActiveChampionIndex + 5;
            championIndex > CHAMPIONS_COUNT ? setSecondActiveChampionIndex(championIndex - CHAMPIONS_COUNT) : setSecondActiveChampionIndex(championIndex);
        }
        if (key === 'j' || key === 'J') {
            const championIndex = secondActiveChampionIndex - 1;
            championIndex <= 0 ? setSecondActiveChampionIndex(CHAMPIONS_COUNT + championIndex) : setSecondActiveChampionIndex(championIndex);
        }
        if (key === 'l' || key === 'L') {
            const championIndex = secondActiveChampionIndex + 1;
            championIndex > CHAMPIONS_COUNT ? setSecondActiveChampionIndex(championIndex - CHAMPIONS_COUNT) : setSecondActiveChampionIndex(championIndex);
        }
        if (key === 'Enter') {
            setChampion(Champions[firstActiveChampionIndex -1], Champions[secondActiveChampionIndex - 1]);
            menuAudio.pause();
        }
    };

    useEffect(() => {
        if (keyName) {
            detectKeyDown(keyName);
        }
    }, [keyName]);

    const activeChampion = (index) => `${firstActiveChampionIndex === index ? 'active--first' : ''} ${secondActiveChampionIndex === index ? 'active--second' : ''}`;
    
    const images = () => {
        return (
            <div className="menu__avatars">{
                Champions.map((el, index) =>
                    <div
                        key={index}
                        className={`menu__avatar ${activeChampion(index + 1)}`}>
                        <img src={el.avatar} alt="champion"></img>
                    </div>
                )
            }</div>
        );
    };

    return (
        <div className="menu">
            <h2 className="menu__title">Select Your Fighter</h2>
            {images()}
            <span className="menu__text">Kombat Zone: Soul Chamber</span>
            <ChampionsPreview
                firstActiveChampionIndex={firstActiveChampionIndex}
                secondActiveChampionIndex={secondActiveChampionIndex}
            />
        </div>
    )
};

export default Menu;
