import React from 'react';

import Modes from '../../assets/modes';

import './styles.scss';

const VersusModes = ({ modes }) => {
    return (
        <div className="versus-modes">
            {modes.map((el) => <img src={Modes[el]} alt='mode'></img>)}
        </div>
    )
};

export default VersusModes;
