import React, { useEffect, useState } from 'react';
import Champions from '../../../assets';

import './styles.scss';

const ChampionsPreview = ({ firstActiveChampionIndex, secondActiveChampionIndex }) => {
    return (
        <div className="champions-preview">
            <div className="champions-preview__champion first">
                <img src={Champions[firstActiveChampionIndex - 1].previewAvatar} alt="champion"></img>
            </div>
            <div className="champions-preview__champion second">
                <img src={Champions[secondActiveChampionIndex - 1].previewAvatar} alt="champion"></img>
            </div>
        </div>
    )
};

export default ChampionsPreview;
