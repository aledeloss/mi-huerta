import React, {useContext} from 'react';
import "./PlantDetail.css";
import {useParams} from 'react-router-dom';
import data from "../../../data/data.js";
import CosechaData from "../../Start/components/CosechaData/CosechaData";
import RecordsContext from '../../../contexts/RecordsContext';

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

    let mesesArray = [];
    const mesesSiembra = () => {
        for (const mes in vegetableData.siembra) {
            mesesArray.push(months[vegetableData.siembra[mes]])
        }
        return mesesArray;
    }

    let [records, setRecord] = useContext(RecordsContext);
    const sembrado = records.find( e => e.name === vegetableData.name) 
    ? records.find( e => e.name === vegetableData.name).sowDate 
    : '¡No todavía!' ;

    return (
        <div className="detail-container">
            <div className="img-container">
            <img src={vegetableData.img.src} alt={vegetableData.img.alt}></img>
            </div>
            <div className="vegetable-main-info">
                <h1>{vegetableData.name}</h1>
                <h4>{`Meses de siembra: ${mesesSiembra().join(', ')}`}</h4>
                <h4>{`Días a cosecha: de ${vegetableData.cosecha[0]} a ${vegetableData.cosecha[1]}`}</h4>
                <p>{`Sembrado: ${sembrado}`}</p>
                {/* <p>{records.find( e => e.name === vegetableData.name) ? '' : <CosechaData vegetable={vegetableData} />}</p> */}
            </div>
            {/* <AddButton
                vegetable={vegetableData}
            /> */}
        </div>
    )
}

export default PlantDetail;