import React from 'react';
import Lottie from 'react-lottie';
import animationCarrot from './carrot-rocket.json';

const Carrot = () => {

    const deafultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCarrot 
    };

    // function handleonClick() {
    //     alert('bien!');
    // };

    return (
        <div className='carrot-container'>
            <Lottie 
                options= {deafultOptions}
            />
        </div>

    )
};

export default Carrot;