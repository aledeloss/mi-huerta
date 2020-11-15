/* eslint-disable no-restricted-globals */
import React from 'react';
import PlantsList from './components/PlantsList/PlantsList';
import './Start.css';
// import Palette from '../../data/palette';


const Start = () => {

    const date = new Date();
    const month = date.getMonth();
    const months = ['enero', 'febrero', 'merzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    return (

        <div className='comenzar-container'>
            <div className="encabezado">
                <h2>Estamos en {months[month]}.</h2>
                <h2>Todas estas plantas podés plantar este mes.</h2>
                <PlantsList />
            </div>
            
        </div>
    )
};

export default Start;