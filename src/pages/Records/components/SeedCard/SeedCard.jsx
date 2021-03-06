import React, {useContext, useState} from 'react';
import RecordsContext from '../../../../contexts/RecordsContext';

const SeedCard = (nombre) => {

    return (
        <div>
            <RecordsContext.Consumer>
            <h3>{nombre}</h3>               
            </RecordsContext.Consumer>

        </div>
    )
};

export default SeedCard;