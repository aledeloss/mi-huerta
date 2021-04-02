import React, {useContext} from 'react';
import "./PlantDetail.css";
import {useParams} from 'react-router-dom';
import data from "../../../data/data.js";
import RecordsContext from '../../../contexts/RecordsContext';
import SaveRecordButton from '../../../components/SaveRecordButton/SaveRecordButton';
import DayJS from 'react-dayjs';

const PlantDetail = ({handleShow}) => {
    
    const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];

    const {vegetable} = useParams();

    const vegetableData = data.find( e => {
        return e.name === vegetable
    });

    let monthsArray = [];
    const sowingMonths = () => {
        for (const mes in vegetableData.sowing) {
            monthsArray.push(months[vegetableData.sowing[mes]])
        }
        return monthsArray;
    }

    let [records, setRecord] = useContext(RecordsContext);
    const sowing = records.find( e => e.name === vegetableData.name)
    // TODO: Ver si está tomando solo un registro o cómo hacer para que tome varios. 
    ? <DayJS format="DD/MM/YY">
        { records.find( e => e.name === vegetableData.name).sowDate.toString() }
    </DayJS> 
    // ? records.find( e => e.name === vegetableData.name).sowDate.toString() 
    : '¡No todavía!' ;

    return (
        <div className="detail-container">
            <div className="img-container">
            <img src={vegetableData.img.src} alt={vegetableData.img.alt}></img>
            </div>
            <div className="vegetable-main-info">
                <h1>{vegetableData.name}</h1>
                <div>Meses de siembra: {sowingMonths().join(', ')}</div>
                <div>Días a cosecha: de {vegetableData.harvest.from} a {vegetableData.harvest.to}</div>
                <div>Distancia entre plantas: de {vegetableData.design.plantsSpacing.from} a {vegetableData.design.plantsSpacing.to}</div>
                <div>Distancia entre líneas: de {vegetableData.design.rowsSpacing.from} a {vegetableData.design.rowsSpacing.to}</div>
                <div>Asociar con: {vegetableData.design.associate.join(', ')}</div>
                <div>Rotar con con: {vegetableData.design.rotate.join(', ')}</div>
                <div>Tolera sombra: {vegetableData.design.shadow}</div>
                <p>Siembra: {sowing}</p>
                {/* <p>{records.find( e => e.name === vegetableData.name) ? '' : <sowingData vegetable={vegetableData} />}</p> */}
            </div>
            <SaveRecordButton vegetable={vegetableData} />
        </div>
    )
}

export default PlantDetail;