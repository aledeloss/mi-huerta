import React from 'react';
import './SeedCard.css';
import DayJS from 'react-dayjs';

const SeedCard = ({ name, sowDate, harvestBegin, harvestEnd}) => {

    // const formattedSowDate = `${sowDate.getDate()}/${sowDate.getMonth()+1}/${sowDate.getFullYear()}`;

    const formattedSowDate = <DayJS format="DD/MM/YY">{ sowDate }</DayJS>

    const renderHarvestBegin = <DayJS format="DD/MM/YY" add={ { days: harvestBegin } }>{sowDate}</DayJS>
    const renderHarvestEnd = <DayJS format="DD/MM/YY" add={ { days: harvestEnd } }>{sowDate}</DayJS>

    return (
        <div className="seedCard-container">
            <h5 className="name">{name}</h5>
            <p className="sowDate">{formattedSowDate}</p>               
            <p className="harvest" >Entre el {renderHarvestBegin} y el {renderHarvestEnd}</p>
        </div>
    )
};

export default SeedCard;

//TODO: Agregar botón de editar y de borrar
//TODO: Actualizar fechas a cosecha real. Usar cosechaData?