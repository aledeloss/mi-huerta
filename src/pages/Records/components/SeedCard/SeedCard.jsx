import React, { useState,useContext } from 'react';
import './SeedCard.css';
import DayJS from 'react-dayjs';
import RecordsContext from '../../../../contexts/RecordsContext';

const SeedCard = ({ id, name, sowDate, harvestBegin, harvestEnd, onClick}) => {

    const renderSowDate = <DayJS format="DD/MM/YY">{ sowDate }</DayJS>
    const renderHarvestBegin = <DayJS format="DD/MM/YY" add={ { days: harvestBegin } }>{sowDate}</DayJS>
    const renderHarvestEnd = <DayJS format="DD/MM/YY" add={ { days: harvestEnd } }>{sowDate}</DayJS>

    const [records, setRecords] = useContext(RecordsContext);


    
    // let handleDeleteClick = ({id}) => {
    //     let index = records.findIndex((record) => record.id === id);
    //     setRecords(records.splice(index, 1));
    // }
    
    let handleDeleteClick = ({id}) => {
        let newRecords = records.filter(record => record.id !== id);
        console.log(newRecords);
        setRecords(newRecords)
    }
    
    return (
        <div className="seedCard-container">
            <h5 className="name">{name}</h5>
            <p className="sowDate">{renderSowDate}</p>               
            <p className="harvest" >Entre el {renderHarvestBegin} y el {renderHarvestEnd}</p>
            {/* <p>{id}</p> */}
            <div className="delete-icon-container" onClick={()=>handleDeleteClick({id})}>X</div>
        </div>
    )
};

export default SeedCard;

//TODO: Agregar botón de editar y de borrar y color verde cuando está para cosechar y rojo cuando se esta por pasar.
