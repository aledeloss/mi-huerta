import React from 'react';
import './Detail.css';
import PlantDetail from './PlantDetail/PlantDetail';
import data from "../../data/data.js";
import {useParams} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Detail = ({ history }) => {

    let {planta} = useParams();

    const plantaData = data.find( e => {
        return e.nombre === planta
    });

    return (
        <div className="page-container">
        <Header history={history}/>
        <div className="main">
            <PlantDetail planta={plantaData} />
        </div>

        <Footer />
        </div>
    )
}

export default Detail;