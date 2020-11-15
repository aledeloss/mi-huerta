import React from 'react';
import Lottie from 'react-lottie';
import animationCarrot from './carrot-rocket.json';

const Carrot = ({history}) => {

    const deafultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCarrot 
    };

    function handleonClick() {
        history.push('/start');
    };

    return (
        <div  onClick={handleonClick}
        className='carrot-container'>
            <Lottie 
                options= {deafultOptions}
            />
        </div>

    )
};

export default Carrot;