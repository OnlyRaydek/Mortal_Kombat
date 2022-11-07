import React from 'react';

import Menu from '../../components/Menu';

import './styles.scss';

const MenuPage = ({ keyName, setChampion, menuAudio }) => {
    const startAudioByClick = () => {
        menuAudio.loop = true;
        menuAudio.play();
    };

    return (
        <div className="menu-page" onClick={startAudioByClick}>
            {<Menu keyName={keyName} setChampion={setChampion} menuAudio={menuAudio} />}
        </div>
    )
};

export default MenuPage;
