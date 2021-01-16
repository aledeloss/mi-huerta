/* eslint-disable no-restricted-globals */
import React from 'react';
import Carrot from './components/Carrot/Carrot';
import './Home.css';

const Home = ({history}) => {
    return (
        <div className='home-app-container'>
            <div className='home-app-content'>

                <div className='home-app-greeting'>
                    <h1>¿Tenés ganar de armar una huerta?</h1>
                    <h1> ¡Comencemos!</h1>
                </div>
                <div className="carrot-container">
                <Carrot history={history} />
                </div>
                
            </div>

        </div>

    )
};

export default Home;