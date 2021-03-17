import React, {useContext, useState} from 'react';
import RecordsContext from '../../../../contexts/RecordsContext';
import './SeedCard.css';

const SeedCard = ({ name, sowDate, harvestBegin, harvestEnd}) => {

    return (
        <div className="seedCard-container">
            <h5 className="name">{name}</h5>
            <p className="sowDate">{sowDate}</p>               
            <p className="harvest" >{`Entre ${harvestBegin} y ${harvestEnd} días`}</p>           
        </div>
    )
};

export default SeedCard;

//TODO: Agregar botón de editar y de borrar
//TODO: Actualizar fechas a cosecha real. Usar cosechaData?