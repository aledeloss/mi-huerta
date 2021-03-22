import React, {useContext} from 'react';
import "./PlantDetail.css";
import {useParams} from 'react-router-dom';
import data from "../../../data/data.js";
import CosechaData from "../../Start/components/CosechaData/CosechaData";
import RecordsContext from '../../../contexts/RecordsContext';
import AddButton from '../../Start/components/AddButton/AddButton';

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

    const {planta} = useParams();

    const plantaData = data.find( e => {
        return e.nombre === planta
    });

    let mesesArray = [];
    const mesesSiembra = () => {
        for (const mes in plantaData.siembra) {
            mesesArray.push(months[plantaData.siembra[mes]])
        }
        return mesesArray;
    }

    let [records, setRecord] = useContext(RecordsContext);
    const sembrado = records.find( e => e.name === plantaData.nombre) 
    ? records.find( e => e.name === plantaData.nombre).sowDate 
    : '¡No todavía!' ;

    return (
        <div className="detail-container">
            <div className="img-container">
            <img src={plantaData.img.src} alt={plantaData.img.alt}></img>
            </div>
            <div className="planta-main-info">
                <h1>{plantaData.nombre}</h1>
                <h4>{`Meses de siembra: ${mesesSiembra().join(', ')}`}</h4>
                <h4>{`Días a cosecha: de ${plantaData.cosecha[0]} a ${plantaData.cosecha[1]}`}</h4>
                <p>{`Sembrado: ${sembrado}`}</p>
                <p>{records.find( e => e.name === plantaData.nombre) ? '' : <CosechaData planta={plantaData} />}</p>
            </div>
            {/* <AddButton
                planta={plantaData}
            /> */}
        </div>
    )
}

export default PlantDetail;