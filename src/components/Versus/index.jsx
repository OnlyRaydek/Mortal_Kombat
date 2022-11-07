import React from 'react';

import './styles.scss';

const Versus = ({ selectedChampions }) => {
    return (
        <div className="versus">
            <div className="versus__avatar firstChampion">
                <img src={selectedChampions.firstChampion.versusAvatar} alt="versus" />
            </div>
            <div className="versus__avatar secondChampion">
                <img src={selectedChampions.secondChampion.versusAvatar} alt="versus" />
            </div>
        </div>
    )
};

export default Versus;
